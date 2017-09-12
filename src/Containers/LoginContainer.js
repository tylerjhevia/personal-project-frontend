"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var Login_1 = require("../Components/Login");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return { currentUser: state.user };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ login: index_1.login }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login_1["default"]);
