"use strict";
exports.__esModule = true;
exports.addFavoriteBook = function (book_id, volumeInfo, user_id) {
    console.log(book_id);
    fetch("http://localhost:3000/api/v1/favorites/new", {
        method: "POST",
        body: JSON.stringify({
            id: book_id,
            volumeInfo: volumeInfo,
            user_id: user_id
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function (res) { return res.json(); })
        .then(function (res) { return console.log(" user id", user_id); });
};
module.exports = { addFavoriteBook: exports.addFavoriteBook };
