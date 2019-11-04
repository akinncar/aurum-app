export function signInRequest(email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: email,
  };
}

export function signInSuccess(email) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: email,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
