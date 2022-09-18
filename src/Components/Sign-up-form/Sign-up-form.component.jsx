import { useState } from "react";
import "./Sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../Form-input/Form-input.component";
import Button from "../Button/Button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formValues, setFormValues] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formValues;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const resetFormFields = () => {
    setFormValues(defaultFormFields);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(res.user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          id="name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          id="psw"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          id="confirm-psw"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit" buttonType="google">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
