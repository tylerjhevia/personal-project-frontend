import { combineReducers } from "redux";
import bookData from "./book-reducer";
import user from "./user-reducer";

const rootReducer = combineReducers({
  bookData,
  user
});

export default rootReducer;
