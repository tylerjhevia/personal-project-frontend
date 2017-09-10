import { combineReducers } from "redux";
import user from "./user-reducer";
import searchResults from "./book-reducer";
import { BookObject, User, State } from "../utils/interfaces";

const rootReducer = combineReducers({
  user,
  searchResults
});

export default rootReducer;
