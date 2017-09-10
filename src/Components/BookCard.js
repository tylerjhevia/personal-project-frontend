"use strict";
exports.__esModule = true;
var React = require("react");
var BookCard = function (props) {
    var volumeInfo = props.book.volumeInfo;
    return (React.createElement("div", { className: "book-card" },
        React.createElement("h4", null, volumeInfo.title),
        React.createElement("h5", null, volumeInfo.authors ? volumeInfo.authors[0] : "No author, I guess"),
        React.createElement("p", null, volumeInfo.description),
        React.createElement("img", { src: volumeInfo.imageLinks
                ? volumeInfo.imageLinks.smallThumbnail
                : "https://pbs.twimg.com/profile_images/565602752152076288/NxWEBoTo.jpeg" })));
};
exports["default"] = BookCard;
