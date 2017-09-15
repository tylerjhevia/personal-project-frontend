import {
  Action,
  Info,
  User,
  FetchedData,
  BookObject
} from "../utils/interfaces";

export const storeBook = (info: any) => ({
  type: "STORE_BOOK",
  info
});

export const getBookData = (url: string): any => {
  return dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(data => dispatch(storeBook(data)));
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

export const storeUserLibrary = (info: object) => ({
  type: "GET_LIBRARY",
  info
});

export const fetchUserFromDB = (username, password) => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(res => dispatch(storeUser(res[0])))
      .catch(error => error.message);
  };
};

export const createUserInDB = (username, email, password) => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email })
    })
      .then(res => res.json())
      .then(res => dispatch(fetchUserFromDB(username, password)))
      .catch(error => error.message);
  };
};

export const fetchUserLibrary = (user_id: number) => {
  console.log("fetching library");
  return dispatch => {
    fetch("http://localhost:3000/api/v1/favorites", {
      method: "POST",
      body: JSON.stringify({ user_id: user_id }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => dispatch(storeUserLibrary(res)));
  };
};
