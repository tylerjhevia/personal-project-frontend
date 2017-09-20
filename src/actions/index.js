"use strict";
exports.__esModule = true;
exports.storeBook = function (info) { return ({
    type: "STORE_BOOK",
    info: info
}); };
exports.getBookData = function (url) {
    console.log("getting data", url);
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
exports.logout = function () {
    ({
        type: "LOGOUT"
    });
};
exports.storeUserLibrary = function (info) { return ({
    type: "GET_LIBRARY",
    info: info
}); };
exports.errorMessage = function (message) { return ({
    type: "USERNAME_TAKEN",
    message: message
}); };
exports.fetchUserFromDB = function (username, password) {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) {
            console.log("fetch user res", res);
            if (res.length === 0) {
                return dispatch(exports.errorMessage("Username or password is incorrect. Please enter valid info."));
            }
            if (res[0].password === password) {
                return dispatch(exports.storeUser(res[0]));
            }
            else {
                return dispatch(exports.errorMessage("Username or password is incorrect. Please enter valid info."));
            }
        })["catch"](function (error) { return console.log(error); });
    };
};
exports.checkIfUserExists = function (username, password, email) {
    console.log("checking user");
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.length === 0) {
                return dispatch(exports.createUserInDB(username, password, email));
            }
            else {
                return dispatch(exports.errorMessage("Username already taken"));
            }
        });
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
            .then(function (res) {
            console.log("create user res", res);
            dispatch(exports.fetchUserFromDB(username, password));
        })["catch"](function (error) { return console.log(error); });
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
exports.recommendBook = function (bookInfo) {
    return function (dispatch) {
        var random = Math.round(Math.random() * 9);
        if (bookInfo.categories) {
            var keyword = bookInfo.categories[0];
            dispatch(exports.getBookData("https://www.googleapis.com/books/v1/volumes?q=" + keyword));
        }
        else {
            dispatch(exports.getBookData("https://www.googleapis.com/books/v1/volumes?q=" + bookInfo.title));
        }
    };
};
