import { addToLibrary } from "../actions/index";
import { Action, StoreBookAction } from "../utils/interfaces";

const library = (state: Array<Object> = [], action: Action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.info];
    default:
      return state;
  }
};

export default library;
