"use strict";
exports.__esModule = true;
var React = require("react");
var BookCardContainer_1 = require("../Containers/BookCardContainer");
require("../Styles/Library.css");
var Library = function (props) {
    var mappedLibraryBooks = props.library.map(function (book) { return React.createElement(BookCardContainer_1["default"], { book: book }); });
    return (React.createElement("div", { className: "library-div" }, mappedLibraryBooks ? mappedLibraryBooks : "Your library is empty"));
};
exports["default"] = Library;
