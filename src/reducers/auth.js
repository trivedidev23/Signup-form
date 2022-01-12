import {
  REGISTER_FAIL_FAN,
  REGISTER_FAIL_TALENT,
  REGISTER_SUCCESS_FAN,
  REGISTER_SUCCESS_TALENT,
} from "./types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS_FAN:
    case REGISTER_SUCCESS_TALENT:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_FAIL_FAN:
    case REGISTER_FAIL_TALENT:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
