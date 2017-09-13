import { Dispatch } from "redux";
import {
  Action,
  Info,
  User,
  FetchedData,
  BookObject,
  LoginState
} from "../utils/interfaces";

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

export const fetchUserFromDB = (username, password) => {
  return Dispatch => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(res => Dispatch(storeUser(res)))
      .catch(error => error.message);
  };
};

export const createUserInDB = (username, email, password) => {
  return Dispatch => {
    fetch("http://localhost:3000/api/v1/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email })
    })
      .then(res => res.json())
      .then(res => Dispatch(fetchUserFromDB(username, password)))
      .catch(error => error.message);
  };
};
