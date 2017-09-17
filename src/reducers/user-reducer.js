"use strict";
exports.__esModule = true;
var user = function (state, action) {
    if (state === void 0) { state = {
        username: null,
        email: null,
        password: null,
        id: null,
        created_at: null
    }; }
    switch (action.type) {
        case "STORE_USER":
            return action.info;
        default:
            return state;
    }
};
exports["default"] = user;
