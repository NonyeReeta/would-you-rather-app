export const SET_LOGGEDIN = "SET_LOGGEDIN";
export function setLoggedIn(bool) {
  return {
    type: SET_LOGGEDIN,
    bool,
  };
}
