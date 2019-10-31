export function casesRequestAll() {
  return {
    type: '@cases/CASES_REQUEST',
  };
}

export function casesSuccess(cases) {
  return {
    type: '@cases/CASES_SUCCESS',
    payload: {cases},
  };
}
