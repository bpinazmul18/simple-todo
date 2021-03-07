import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  bookName: reducer,
});

export default rootReducer;
