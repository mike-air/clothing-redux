import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,arrayUnion,
  writeBatch,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkDzJiGI6RkM06T9vEW2COQ-DPZGzGzBE",
  authDomain: "eyrie-clothing-db.firebaseapp.com",
  projectId: "eyrie-clothing-db",
  storageBucket: "eyrie-clothing-db.appspot.com",
  messagingSenderId: "441303077994",
  appId: "1:441303077994:web:e74c02b9ef9b0b034e2613",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

/*******************************
 *
 * DB FIRESTORE SECTION
 *
 * ****************************/

/****Exporting data to fireStore
 * (adding multiple document in a collection)*****/
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("DONE");
};

/* Writing data to the database. */
export const addToDB = async (
  collectionKey = "categories",category,
  objectsToAdd
) => {
  // const collectionRef = collection(db, collectionKey);
  const docRef = doc(db, collectionKey, category);
   
  await updateDoc(docRef, {
    items: arrayUnion(objectsToAdd),
  });

 
};

export const getCategoriesAndDocuments = async (
  collectionKey = "categories"
) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return  querySnapShot.docs.map(docSnapShot => docSnapShot.data())
  //   .reduce((acc, docSnapShot) => {
  //   const { title, items } = docSnapShot.data();

  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

 // return categoryMap;
};


export const getUserDB = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

    return doc.data()
  });
} 