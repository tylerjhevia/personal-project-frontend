"use strict";
exports.__esModule = true;
var searchResults = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "STORE_BOOK":
            return action.info.items;
        default:
            return state;
    }
};
exports["default"] = searchResults;
