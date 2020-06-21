import { createStore, combineReducers } from "redux";
import AppReducer from "./App/Reducers";
// import ExampleReducer from './App/Example'

// Init redux here with store states
export default () => {
  const rootReducer = combineReducers({
    app: AppReducer,
    // exmaple: ExampleReducer
  });

  return createStore(rootReducer);
};
