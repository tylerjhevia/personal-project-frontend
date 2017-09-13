"use strict";
exports.__esModule = true;
exports.register = function (info) { return ({
    type: "REGISTER",
    info: info
}); };
exports.storeBook = function (info) { return ({
    type: "STORE_BOOK",
    info: info
}); };
exports.getBookData = function (url) {
    return function (Dispatch) {
        fetch(url)
            .then(function (data) { return data.json(); })
            .then(function (data) { return Dispatch(exports.storeBook(data)); });
    };
};
exports.storeUser = function (info) { return ({
    type: "STORE_USER",
    info: info
}); };
exports.addToLibrary = function (info) { return ({
    type: "ADD_BOOK",
    info: info
}); };
exports.fetchUserFromDB = function (username, password) {
    return function (Dispatch) {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(function (res) { return res.json(); })
            .then(function (res) { return Dispatch(exports.storeUser(res)); })["catch"](function (error) { return error.message; });
    };
};
