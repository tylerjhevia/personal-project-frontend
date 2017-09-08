export type Action = {
  type: "PRACTICE";
  info: object;
};

export interface Info {
  name: string;
  email: string;
}

export const testAction = (info: Info): Action => ({
  type: "PRACTICE",
  info
});

export const storeBook = (info: object) => ({
  type: "STORE_BOOK",
  info
});

export const getBookData = (url: string) => {
  return dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(data => dispatchEvent(storeBook(data)));
  };
};

// interface Person {
//   name: string;
//   hometown: string;
// }

// interface HeviaPerson extends Person {
//   college: "University of Florida";
// }
