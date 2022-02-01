import { loginFailure, loginStart, loginSuccess, logout, logoutFailure } from "./userRedux";
import { registerFailure, registerStart, registerSuccess } from "./userRegisterRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutCall = async (dispatch) => {
  try {
    dispatch(logout());
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(registerFailure());
  }
};