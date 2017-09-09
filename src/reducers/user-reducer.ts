// import { Store } from "./store";
import { login, Action } from "../actions/index";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const user = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return action.info;
    default:
      return initialState;
  }
};

export default user;

// const bookData = (state: object, action: Action) => {
//   switch (action.type) {
//     case "STORE_BOOK":
//       return action.data;
//     default:
//       return state;
//   }
// };
// const initialState: Store.Counter = {
//   value: 0
// };
