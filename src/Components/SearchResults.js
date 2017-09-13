"use strict";
exports.__esModule = true;
var React = require("react");
var BookCardContainer_1 = require("../Containers/BookCardContainer");
require("../Styles/SearchResults.css");
var SearchResults = function (props) {
    var mappedResults = props.searchResults.map(function (book) {
        return React.createElement(BookCardContainer_1["default"], { key: book.id, book: book });
    });
    return (React.createElement("div", { className: "search-results-div" }, mappedResults));
};
exports["default"] = SearchResults;
