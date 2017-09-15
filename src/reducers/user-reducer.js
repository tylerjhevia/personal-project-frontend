"use strict";
exports.__esModule = true;
var initialState = {
    name: null,
    email: null,
    password: null,
    id: null,
    created_at: null
};
var user = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "STORE_USER":
            return action.info;
        default:
            return initialState;
    }
};
exports["default"] = user;
