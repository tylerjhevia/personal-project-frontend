"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var Register_1 = require("../Components/Register");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return { currentUser: state.user };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ register: index_1.register }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Register_1["default"]);
