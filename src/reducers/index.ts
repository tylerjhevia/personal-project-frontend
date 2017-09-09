import { combineReducers } from "redux";
import user from "./user-reducer";
import searchResults from "./book-reducer";

const rootReducer = combineReducers({
  user,
  searchResults
});

export default rootReducer;
