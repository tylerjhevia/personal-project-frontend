"use strict";
exports.__esModule = true;
var React = require("react");
var BookCardContainer_1 = require("../Containers/BookCardContainer");
require("../Styles/Library.css");
var Library = function (props) {
    if (props.user[0]) {
        props.fetchUserLibrary(props.user[0].id);
    }
    var mappedLibraryBooks;
    props.library !== []
        ? (mappedLibraryBooks = props.library.map(function (book) { return React.createElement(BookCardContainer_1["default"], { book: book }); }))
        : (mappedLibraryBooks = "uh-oh");
    return (React.createElement("div", { className: "library-div" }, mappedLibraryBooks));
};
exports["default"] = Library;
