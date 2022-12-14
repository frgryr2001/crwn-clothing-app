import { useState } from "react";
import "./Sign-in-form.styles.scss";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.util";
import FormInput from "../Form-input/Form-input.component";
import Button, { BUTTON_TYPES_CLASS } from "../Button/Button.component";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignUpForm = () => {
  const [formValues, setFormValues] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { email, password } = formValues;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const resetFormFields = () => {
    setFormValues(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart({ email, password }));

      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Wrong password");
      } else if (err.code === "auth/user-not-found") {
        alert("User not found");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASS.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
