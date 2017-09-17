import { storeBook } from "../actions/index";
import { Action, StoreBookAction, BookObject } from "../utils/interfaces";

const searchResults = (
  state: Array<BookObject> = [],
  action: StoreBookAction
) => {
  switch (action.type) {
    case "STORE_BOOK":
      return action.info.items;
    default:
      return state;
  }
};

export default searchResults;
