import {
  Action,
  Info,
  User,
  FetchedData,
  BookObject,
  VolumeInfo
} from "../utils/interfaces";

export const storeBook = (info: any) => ({
  type: "STORE_BOOK",
  info
});

export const getBookData = (url: string) => {
  console.log("getting data", url);
  return (dispatch: Function) => {
    fetch(url)
      .then(data => data.json())
      .then(data => dispatch(storeBook(data)));
  };
};

export const storeUser = (info: object) => ({
  type: "STORE_USER",
  info
});

export const storeUserLibrary = (info: object) => ({
  type: "GET_LIBRARY",
  info
});

export const errorMessage = (message: string) => ({
  type: "USERNAME_TAKEN",
  message
});

export const fetchUserFromDB = (username: string, password: string) => {
  return (dispatch: Function) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then((res: Response) => {
        console.log("fetch user res", res);
        if (res.length === 1) {
          return dispatch(storeUser(res[0]));
        } else {
          return dispatch(errorMessage("Username already exists"));
        }
      })
      .catch((error: Response) => console.log(error));
  };
};

export const createUserInDB = (
  username: string,
  email: string,
  password: string
): ((dispatch: Function) => void) => {
  return (dispatch: Function) => {
    fetch("http://localhost:3000/api/v1/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email })
    })
      .then(res => res.json())
      .then(res => {
        console.log("create user res", res);
        dispatch(fetchUserFromDB(username, password));
      })
      .catch(error => console.log(error.message));
  };
};

export const fetchUserLibrary = (user_id: number) => {
  return (dispatch: Function) => {
    fetch("http://localhost:3000/api/v1/favorites", {
      method: "POST",
      body: JSON.stringify({ user_id: user_id }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => dispatch(storeUserLibrary(res)));
  };
};

export const deleteFromLibrary = (user_id: number, book_id: string) => {
  console.log("user", user_id, "book", book_id);
  return (dispatch: Function) => {
    fetch("http://localhost:3000/api/v1/favorites/delete", {
      method: "DELETE",
      body: JSON.stringify({ user_id: user_id, book_id: book_id }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => dispatch(console.log(res)));
  };
};

export const recommendBook = (bookInfo: VolumeInfo) => {
  return (dispatch: Function) => {
    let random = Math.round(Math.random() * 9);
    if (bookInfo.categories[0]) {
      const keyword = bookInfo.categories[0];
      dispatch(
        getBookData(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      );
    }
  };
};
