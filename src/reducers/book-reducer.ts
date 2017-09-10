import { storeBook } from "../actions/index";
import { Action, StoreBookAction } from "../utils/interfaces";

const initialState = "books";

const searchResults = (state: any, action: StoreBookAction) => {
  console.log(action);
  switch (action.type) {
    case "STORE_BOOK":
      return action.info.items;
    default:
      return initialState;
  }
};

export default searchResults;
