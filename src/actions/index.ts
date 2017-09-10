import { Dispatch } from "redux";
import { Action, Info } from "../utils/interfaces";

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

// interface Person {
//   name: string;
//   hometown: string;
// }

// interface GatorPerson extends Person {
//   college: "University of Florida";
// }
