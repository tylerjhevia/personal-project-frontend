import { Dispatch } from "redux";
import {
  Action,
  Info,
  User,
  FetchedData,
  BookObject
} from "../utils/interfaces";

export interface Thunk {
  /*write stuff here
  make separate file for interfaces*/
}

export const register = (info: Info): Action => ({
  type: "REGISTER",
  info
});

export const storeBook = (info: any) => ({
  type: "STORE_BOOK",
  info
});

export const getBookData = (url: string): any => {
  return Dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(data => Dispatch(storeBook(data)));
  };
};

export const storeUser = (info: object) => ({
  type: "STORE_USER",
  info
});

export const addToLibrary = (book: BookObject) => ({
  type: "ADD_BOOK",
  book
});

// export const login = (user: User) => {
//   console.log(user);
// };
