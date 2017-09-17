"use strict";
exports.__esModule = true;
exports.storeBook = function (info) { return ({
    type: "STORE_BOOK",
    info: info
}); };
exports.getBookData = function (url) {
    return function (dispatch) {
        fetch(url)
            .then(function (data) { return data.json(); })
            .then(function (data) { return dispatch(exports.storeBook(data)); });
    };
};
exports.storeUser = function (info) { return ({
    type: "STORE_USER",
    info: info
}); };
// export const addToLibrary = (info: object) => ({    //not using this??
//   type: "ADD_BOOK",
//   info
// });
exports.storeUserLibrary = function (info) { return ({
    type: "GET_LIBRARY",
    info: info
}); };
exports.fetchUserFromDB = function (username, password) {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) { return dispatch(exports.storeUser(res[0])); })["catch"](function (error) { return console.log(error); });
    };
};
exports.createUserInDB = function (username, email, password) {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/users/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password, email: email })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) { return dispatch(exports.fetchUserFromDB(username, password)); })["catch"](function (error) { return error.message; });
    };
};
exports.fetchUserLibrary = function (user_id) {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/favorites", {
            method: "POST",
            body: JSON.stringify({ user_id: user_id }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (res) { return res.json(); })
            .then(function (res) { return dispatch(exports.storeUserLibrary(res)); });
    };
};
exports.deleteFromLibrary = function (user_id, book_id) {
    console.log("user", user_id, "book", book_id);
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/favorites/delete", {
            method: "DELETE",
            body: JSON.stringify({ user_id: user_id, book_id: book_id }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (res) { return res.json(); })
            .then(function (res) { return dispatch(console.log(res)); });
    };
};
