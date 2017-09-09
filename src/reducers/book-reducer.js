"use strict";
exports.__esModule = true;
var initialState = "books";
var searchResults = function (state, action) {
    switch (action.type) {
        case "STORE_BOOK":
            return action.info.items;
        default:
            return initialState;
    }
};
exports["default"] = searchResults;
