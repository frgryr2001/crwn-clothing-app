import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.util";
const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formValues;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          required
          id="name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="psw">Password</label>
        <input
          type="password"
          required
          id="psw"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-psw">Confirm Password</label>
        <input
          type="password"
          required
          id="confirm-psw"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
