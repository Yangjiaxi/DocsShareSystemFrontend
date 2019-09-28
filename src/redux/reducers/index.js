import { combineReducers } from "redux";
import { userReducer } from "./user";
import { componentReducer } from "./component";

export const reducers = combineReducers({
  component: componentReducer,
  user: userReducer
});
