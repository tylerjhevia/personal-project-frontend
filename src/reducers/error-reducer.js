"use strict";
exports.__esModule = true;
var error = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "USERNAME_TAKEN":
            return action.message;
        default:
            return state;
    }
};
exports["default"] = error;
