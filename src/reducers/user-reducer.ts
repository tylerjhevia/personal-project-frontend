import { Store } from "./store";
import { testAction, Action } from "../actions/index";

const user = (state: object, action: Action) => {
  switch (action.type) {
    case "PRACTICE":
      return action.info;
    default:
      return state;
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

// function counter(
//   state: Store.Counter = initialState,
//   action: Action
// ): Store.Counter {
//   const { value } = state;
//   switch (action.type) {
//     case "INCREMENT_COUNTER":
//       const newValue = value + action.delta;
//       return { value: newValue };
//     case "RESET_COUNTER":
//       return { value: 0 };
//   }

//   return state;
// }

// export default counter;

// function user(state: Store.Info = intialState);
