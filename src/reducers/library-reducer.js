"use strict";
exports.__esModule = true;
var library = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "ADD_BOOK":
            return state.concat([action.info]);
        default:
            return state;
    }
};
exports["default"] = library;
