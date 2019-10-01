import * as actions from "../actions";

const storedToken = localStorage.getItem("token");
const payload = storedToken && storedToken.split(".")[1];
const time = payload && JSON.parse(atob(payload)).exp;
const verifiedToken =
  storedToken !== null && time > Date.now() / 1000 ? storedToken : "";

const init = {
  token: verifiedToken,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case actions.LOGIN:
      const { token } = action;
      localStorage.setItem("token", token);
      return { ...state, token };
    case actions.LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: "" };
    default:
      return state;
  }
};

export default userReducer;
