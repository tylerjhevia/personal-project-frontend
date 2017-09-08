import { Store } from "./store";
import { testAction, Action, storeBook } from "../actions/index";

const bookData = (state: object, action: Action) => {
  switch (action.type) {
    case "STORE_BOOK":
      return action.info;
    default:
      return state;
  }
};

export default bookData;
