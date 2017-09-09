"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var Search_1 = require("../Components/Search");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return { searchResults: state.searchResults };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ getBookData: index_1.getBookData }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Search_1["default"]);
