"use strict";
exports.__esModule = true;
var usersAPI_1 = require("./usersAPI");
var index_1 = require("../actions/index");
function handleClick(props, e, volumeInfo) {
    if (props.inLibrary === true) {
        props.deleteFromLibrary(props.user.id, props.book_id);
        e.currentTarget.classList.toggle("hidden");
    }
    else {
        usersAPI_1.addFavoriteBook(props.book_id, volumeInfo, props.user.id);
        e.currentTarget.classList.toggle("selected");
    }
    console.log("finna fetch library");
    return props.fetchUserLibrary(props.user.id);
}
exports.handleClick = handleClick;
function recommendBook(bookInfo) {
    var random = Math.round(Math.random() * 9);
    console.log("random number: ", random);
    if (bookInfo.categories[0]) {
        var keyword = bookInfo.categories[0];
        index_1.getBookData("https://www.googleapis.com/books/v1/volumes?q=" + keyword);
    }
}
exports.recommendBook = recommendBook;
