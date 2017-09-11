"use strict";
exports.__esModule = true;
var React = require("react");
var BookCard_1 = require("./BookCard");
require("../Styles/SearchResults.css");
var SearchResults = function (props) {
    var mappedResults = props.searchResults.map(function (book) {
        return React.createElement(BookCard_1["default"], { key: book.id, book: book });
    });
    return (React.createElement("div", { className: "search-results-div" }, mappedResults));
};
exports["default"] = SearchResults;
