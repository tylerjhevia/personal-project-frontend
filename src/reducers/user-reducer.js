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
        case "REGISTER":
            return action.info;
        case "STORE_USER":
            return action.info;
        default:
            return initialState;
    }
};
exports["default"] = user;
