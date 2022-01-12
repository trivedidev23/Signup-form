import axios from "axios";
import {
  REGISTER_FAIL_FAN,
  REGISTER_FAIL_TALENT,
  REGISTER_SUCCESS_FAN,
  REGISTER_SUCCESS_TALENT,
  LOGOUT,
} from "./types";

export const registerFan =
  ({ Firstname, Lastname, Username, Email, Password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      Firstname,
      Lastname,
      Username,
      Email,
      Password,
    });

    try {
      const res = await axios.post(
        "http://wren.in:3200/api/sign-up/fan",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS_FAN,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL_FAN,
      });
    }
  };

export const registerTalent =
  ({ Firstname, Lastname, Username, Email, Password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      Firstname,
      Lastname,
      Username,
      Email,
      Password,
    });

    try {
      const res = await axios.post(
        "http://wren.in:3200/api/sign-up/talent",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS_TALENT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL_TALENT,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
