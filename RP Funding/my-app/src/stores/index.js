import { createStore, combineReducers } from "redux";
import AppReducer from "./App/Reducers";
import UserReducer from "./User/Reducers";

export default () => {
  const rootReducer = combineReducers({
    app: AppReducer,
    user: UserReducer,
  });

  return createStore(rootReducer);
};
