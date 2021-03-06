"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var SearchResults_1 = require("../Components/SearchResults");
var redux_1 = require("redux");
var index_1 = require("../actions/index");
var mapStateToProps = function (state) {
    return { searchResults: state.searchResults };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ addToLibrary: index_1.addToLibrary }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchResults_1["default"]);
