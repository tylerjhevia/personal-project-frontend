"use strict";
exports.__esModule = true;
exports.fetchUserFromDB = function (username, password) {
    return fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(function (results) { return results.json(); })
        .then(function (response) { return console.log("found user", response); })["catch"](function (error) { return error.message; });
};
exports.createUserInDB = function (username, password, email) {
    return fetch("http://localhost:3000/api/v1/users/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password, email: email })
    })
        .then(function (results) { return results.json(); })
        .then(function (response) { return console.log("created user", response); })["catch"](function (error) { return error.message; });
};
module.exports = { fetchUserFromDB: exports.fetchUserFromDB, createUserInDB: exports.createUserInDB };
