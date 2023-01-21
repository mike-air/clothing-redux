import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error("user creation error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
      <div className="sign-up-container">
          <h2>Don't Have a account ?</h2>
      <span>Sign Up with Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"User name"}
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name={"displayName"}
        />
        <FormInput
          label={"Email"}
          type="email"
          required
          value={email}
          onChange={handleChange}
          name={"email"}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          value={password}
          onChange={handleChange}
          name={"password"}
        />
        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name={"confirmPassword"}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
