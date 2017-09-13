"use strict";
exports.__esModule = true;
var React = require("react");
require("../Styles/BookCard.css");
var BookCard = function (props) {
    console.log("book card props", props);
    var volumeInfo = props.book.volumeInfo;
    return (React.createElement("div", { className: "book-card", onClick: function (e) {
            e.preventDefault();
            console.log("book props", props.book);
            props.addToLibrary(props.book);
        } },
        React.createElement("img", { className: "book-image", src: volumeInfo.imageLinks
                ? volumeInfo.imageLinks.smallThumbnail
                : "https://pbs.twimg.com/profile_images/565602752152076288/NxWEBoTo.jpeg" }),
        React.createElement("div", { className: "book-details" },
            React.createElement("h4", { className: "book-title" }, volumeInfo.title),
            React.createElement("h5", { className: "book-author" }, volumeInfo.authors ? volumeInfo.authors[0] : "No author, I guess"),
            React.createElement("p", { className: "book-description" }, volumeInfo.description))));
};
exports["default"] = BookCard;
