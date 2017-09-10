"use strict";
exports.__esModule = true;
var React = require("react");
var BookCard_1 = require("./BookCard");
var SearchResults = function (props) {
    var mappedResults = props.searchResults.map(function (book) {
        return React.createElement(BookCard_1["default"], { key: book.id, book: book });
    });
    return (React.createElement("div", { className: "search-results-div" },
        React.createElement("h3", null, mappedResults)));
};
exports["default"] = SearchResults;
