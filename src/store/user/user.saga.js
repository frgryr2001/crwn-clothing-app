import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userTypes";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./userAction";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.util";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  //   console.log("userAuth", userAuth);
  try {
    const userRef = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    yield put(signInSuccess({ id: userRef.id, ...userRef.data() }));
  } catch (e) {
    yield put(signInFailure(e));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithGooglePopup();
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signInSuccess(user, displayName));
  } catch (e) {
    yield put(signInFailure(e));
  }
}
export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure(e));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInformation },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
