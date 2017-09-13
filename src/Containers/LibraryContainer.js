"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Library_1 = require("../Components/Library");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return { library: state.library };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Library_1["default"]);
