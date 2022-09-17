// import { useEffect } from "react";
// import {getRedirectResult} from 'firebase/auth'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../Components/Sign-up-form/Sign-up-form.component";
const SignIn = () => {
  // useEffect(() => {
  //   const res = async() => {
  //     const result = await getRedirectResult(auth)
  //     if (result.user) {
  //       const userDocRef  = await createUserDocumentFromAuth(result.user);
  //     }
  //   }
  //   res();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
