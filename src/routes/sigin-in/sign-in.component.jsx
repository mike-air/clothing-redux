import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const useDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      SignIn
      <Button buttonType={"google"} onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
