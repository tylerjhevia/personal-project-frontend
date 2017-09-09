import { Dispatch } from "redux";

export type Action = {
  type: string;
  info: object;
};

export interface Thunk {
  /*write stuff here
  make separate file for interfaces*/
}

export interface Info {
  name: string;
  email: string;
  password: string;
}

export const login = (info: Info): Action => ({
  type: "LOGIN",
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

// interface Person {
//   name: string;
//   hometown: string;
// }

// interface GatorPerson extends Person {
//   college: "University of Florida";
// }
