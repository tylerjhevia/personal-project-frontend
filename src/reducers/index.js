"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var user_reducer_1 = require("./user-reducer");
var book_reducer_1 = require("./book-reducer");
var library_reducer_1 = require("./library-reducer");
var error_reducer_1 = require("./error-reducer");
var rootReducer = redux_1.combineReducers({
    user: user_reducer_1["default"],
    searchResults: book_reducer_1["default"],
    library: library_reducer_1["default"],
    error: error_reducer_1["default"]
});
exports["default"] = rootReducer;
