"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
require("../Styles/Login.css");
var react_router_dom_1 = require("react-router-dom");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { username: "", password: "" };
        return _this;
    }
    Login.prototype.componentDidMount = function () {
        fetch("http://localhost:3000/api/v1/users")
            .then(function (data) { return data.json(); })
            .then(function (data) { return console.log(data); });
    };
    Login.prototype.handleChange = function (value, field) {
        this.setState(__assign({}, this.state, (_a = {}, _a[field] = value, _a)));
        var _a;
    };
    Login.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "login-div" },
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "username"); }, placeholder: "username", className: "username-input" }),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "password"); }, placeholder: "password", className: "password-input" }),
            React.createElement("button", { className: "login-button", onClick: function () {
                    _this.props.fetchUserFromDB(_this.state.username, _this.state.password);
                } }, "Submit"),
            React.createElement(react_router_dom_1.NavLink, { to: "/register", className: "link register-link" },
                "Don't have an account? ",
                React.createElement("span", null, "Sign up"))));
    };
    return Login;
}(React.Component));
exports["default"] = Login;
