"use strict";
exports.__esModule = true;
var initialState = [];
var searchResults = function (state, action) {
    console.log("fire book reducer");
    switch (action.type) {
        case "STORE_BOOK":
            return action.info.items;
        default:
            return initialState;
    }
};
exports["default"] = searchResults;
