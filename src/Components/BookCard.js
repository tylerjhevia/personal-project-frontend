"use strict";
exports.__esModule = true;
var React = require("react");
require("../Styles/BookCard.css");
var helpers_1 = require("../utils/helpers");
var react_router_dom_1 = require("react-router-dom");
var BookCard = function (props) {
    var volumeInfo = props.book.volumeInfo;
    return (React.createElement("div", { className: "book-card-container" },
        React.createElement("div", { className: "book-card", onClick: function (e) {
                props.user.username
                    ? helpers_1.handleClick(props, e, volumeInfo)
                    : alert("not logged in");
            } },
            React.createElement("img", { className: "book-image", src: volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.smallThumbnail
                    : "https://pbs.twimg.com/profile_images/565602752152076288/NxWEBoTo.jpeg" }),
            React.createElement("div", { className: "book-details" },
                React.createElement("h4", { className: "book-title" }, volumeInfo.title),
                React.createElement("h5", { className: "book-author" }, volumeInfo.authors ? volumeInfo.authors[0] : "No author, I guess"),
                React.createElement("p", { className: "book-description" }, volumeInfo.description))),
        React.createElement(react_router_dom_1.NavLink, { to: "/search", className: "recommend-button", onClick: function () { return props.recommendBook(volumeInfo); } }, "Find similar books")));
};
exports["default"] = BookCard;
