import { Action, StoreBookAction, BookObject } from "../utils/interfaces";

const library = (state: Array<BookObject> = [], action: Action) => {
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
