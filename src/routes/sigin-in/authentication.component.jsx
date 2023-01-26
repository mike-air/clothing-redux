import { createContext, useContext,useEffect } from "react";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import { UserContext } from "../../context/user.context";
import "./authentication.style.scss";
import { useNavigate } from "react-router-dom";
const SignIn = () => {

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('/home/shop')
    }

  }, [currentUser, navigate])
  
  return (
    <div
      className="authentication-container"
    >
      <SignInForm />
      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignIn;
