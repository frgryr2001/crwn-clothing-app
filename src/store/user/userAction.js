import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./userTypes";
export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
//  CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
//   GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
//   EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
//   SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
//   SIGN_IN_FAILURE: "user/SIGN_IN_FAILURE",
export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};
export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};
export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};
export const signInFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
};
export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};
export const signUpSuccess = ({ user, additionalInformation }) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalInformation,
  });
};
export const signUpFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);
};

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);
};
