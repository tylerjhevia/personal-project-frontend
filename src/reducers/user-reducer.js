"use strict";
exports.__esModule = true;
var initialState = {
    name: "",
    email: "",
    password: ""
};
var user = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "LOGIN":
            return action.info;
        default:
            return initialState;
    }
};
exports["default"] = user;
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
