"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var redux_1 = require("redux");
var App_1 = require("../Components/App");
var mapStateToProps = function (state) {
    return { user: state.user };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ fetchUserLibrary: index_1.fetchUserLibrary }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App_1["default"]);
