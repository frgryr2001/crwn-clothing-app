// import { useEffect } from "react";
// import {getRedirectResult} from 'firebase/auth'
import "./Authentication.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import SignUpForm from "../../Components/Sign-up-form/Sign-up-form.component";
import SignInForm from "../../Components/Sign-in-form/Sign-in-form.component";

const Authentication = () => {
  // useEffect(() => {
  //   const res = async() => {
  //     const result = await getRedirectResult(auth)
  //     if (result.user) {
  //       const userDocRef  = await createUserDocumentFromAuth(result.user);
  //     }
  //   }
  //   res();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
