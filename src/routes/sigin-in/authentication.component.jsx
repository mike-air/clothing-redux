import { useEffect } from "react";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import "./authentication.style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const SignIn = () => {

  const currentUser = useSelector(state => state.user.currentUser)
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
