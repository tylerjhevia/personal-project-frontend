"use strict";
exports.__esModule = true;
var React = require("react");
require("../Styles/BookCard.css");
var usersAPI_1 = require("../utils/usersAPI");
function handleClick(props, e, volumeInfo) {
    if (props.inLibrary === true) {
        props.deleteFromLibrary(props.user.id, props.book_id);
        e.currentTarget.classList.toggle("hidden");
        props.fetchUserLibrary(props.user.id);
    }
    else {
        usersAPI_1.addFavoriteBook(props.book_id, volumeInfo, props.user.id);
        e.currentTarget.classList.toggle("selected");
        props.fetchUserLibrary(props.user.id);
    }
    props.fetchUserLibrary(props.user.id);
}
var BookCard = function (props) {
    console.log("book props", props);
    var volumeInfo = props.book.volumeInfo;
    return (React.createElement("div", { className: "book-card", onClick: function (e) {
            props.user.username ? handleClick(props, e, volumeInfo) : alert("fart");
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
