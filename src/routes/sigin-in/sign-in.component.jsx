import { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const useDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
    </div>
  );
};

export default SignIn;
