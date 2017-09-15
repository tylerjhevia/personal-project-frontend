"use strict";
exports.__esModule = true;
var initialState = [];
var searchResults = function (state, action) {
    if (state === void 0) { state = initialState; }
    console.log("fire book reducer");
    switch (action.type) {
        case "STORE_BOOK":
            return action.info.items;
        default:
            return state;
    }
};
exports["default"] = searchResults;
