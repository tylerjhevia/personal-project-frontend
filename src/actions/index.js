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
