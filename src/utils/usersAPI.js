"use strict";
// export const addFavoriteBook = (
//   title: string,
//   author: string,
//   google_id: string,
//   user_id: number
// ) => {
//   fetch("http://localhost:3000/api/v1/favorites/new", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title, author, google_id, user_id })
//   })
//     .then(res => res.json())
//     .then(res => alert("hey"))
//     .catch(error => error.message);
// };
exports.__esModule = true;
exports.addFavoriteBook = function (id, volumeInfo, user_id) {
    fetch("http://localhost:3000/api/v1/favorites/new", {
        method: "POST",
        body: JSON.stringify({ id: id, volumeInfo: volumeInfo, user_id: user_id }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function (res) { return res.json(); })
        .then(function (res) { return console.log(" user id", user_id); });
};
module.exports = { addFavoriteBook: exports.addFavoriteBook };
