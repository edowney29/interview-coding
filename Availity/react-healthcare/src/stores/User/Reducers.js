import { LOADING, ERROR, UPDATE_ROUTE, UPDATE_USER } from "./Actions";
import INITIAL_STATE from "./InitialState";

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING: {
      return [
        ...state,
        {
          loading: true,
          message: null,
        },
      ];
    }
    case ERROR: {
      const { message } = action.data;
      return [
        ...state,
        {
          loading: false,
          message: message,
        },
      ];
    }
    case UPDATE_USER:
      return [
        ...state,
        ...action.data,
        {
          loading: false,
          message: null,
        },
      ];
    default:
      return state;
  }
}

export default appReducer;
