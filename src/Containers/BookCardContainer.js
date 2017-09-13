"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var redux_1 = require("redux");
var BookCard_1 = require("../Components/BookCard");
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ addToLibrary: index_1.addToLibrary }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BookCard_1["default"]);
