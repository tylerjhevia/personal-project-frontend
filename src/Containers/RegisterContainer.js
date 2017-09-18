"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var Register_1 = require("../Components/Register");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return { currentUser: state.user, error: state.error };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ createUserInDB: index_1.createUserInDB }, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Register_1["default"]);
