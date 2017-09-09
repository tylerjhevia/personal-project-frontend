import { Action, storeBook } from "../actions/index";

const initialState = "books";

const searchResults = (state: any, action: Action) => {
  switch (action.type) {
    case "STORE_BOOK":
      return action.info.items;
    default:
      return initialState;
  }
};

export default searchResults;
