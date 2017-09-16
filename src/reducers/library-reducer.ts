import { addToLibrary } from "../actions/index";
import { Action, StoreBookAction } from "../utils/interfaces";

const library = (state: Array<Object> = [], action: Action) => {
  console.log("library action", action);
  switch (action.type) {
    case "GET_LIBRARY":
      return action.info;
    case "ADD_BOOK":
      return [...state, action.info];
    default:
      return state;
  }
};

export default library;
