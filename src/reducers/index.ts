import { combineReducers } from "redux";
import user from "./user-reducer";
import searchResults from "./book-reducer";
import library from "./library-reducer";
import { BookObject, User, State } from "../utils/interfaces";

const rootReducer = combineReducers({
  user,
  searchResults,
  library
});

export default rootReducer;
