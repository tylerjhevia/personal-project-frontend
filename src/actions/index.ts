import { Dispatch } from "redux";
import {
  Action,
  Info,
  User,
  FetchedData,
  BookObject
} from "../utils/interfaces";

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

export const addToLibrary = (info: object) => ({
  type: "ADD_BOOK",
  info
});
