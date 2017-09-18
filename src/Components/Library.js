"use strict";
exports.__esModule = true;
var React = require("react");
var BookCardContainer_1 = require("../Containers/BookCardContainer");
require("../Styles/Library.css");
var react_router_1 = require("react-router");
var Library = function (props) {
    if (props.user.username === null) {
        return React.createElement(react_router_1.Redirect, { to: "/search" });
    }
    var mappedLibraryBooks;
    props.library !== []
        ? (mappedLibraryBooks = props.library.map(function (book) {
            return React.createElement(BookCardContainer_1["default"], { book: book, inLibrary: true, key: book.id, book_id: book.book_id });
        }))
        : "Your library is empty!";
    return (React.createElement("div", { className: "library-div" },
        React.createElement("h3", { className: "library-label" },
            props.user.username,
            "'s saved books"),
        props.library !== []
            ? mappedLibraryBooks
            : React.createElement("p", { className: "empty-message" }, "No books in here")));
};
exports["default"] = Library;
