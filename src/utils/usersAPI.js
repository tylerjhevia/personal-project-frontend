"use strict";
exports.__esModule = true;
exports.fetchUserFromDB = function (username, password) {
    return fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(function (results) { return results.json(); })
        .then(function (response) { return console.log("found user", response); });
};
module.exports = { fetchUserFromDB: exports.fetchUserFromDB };
