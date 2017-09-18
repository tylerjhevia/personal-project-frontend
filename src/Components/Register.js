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
require("../Styles/Register.css");
var react_router_1 = require("react-router");
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { username: "", email: "", password: "" };
        return _this;
    }
    Register.prototype.handleChange = function (value, field) {
        this.setState(__assign({}, this.state, (_a = {}, _a[field] = value, _a)));
        var _a;
    };
    Register.prototype.render = function () {
        var _this = this;
        console.log("registration props", this.props);
        if (this.props.currentUser.username) {
            return React.createElement(react_router_1.Redirect, { to: "/search" });
        }
        return (React.createElement("div", { className: "register-div" },
            React.createElement("p", { className: "error-message" }, this.props.error
                ? this.props.error
                : "Please enter your information"),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "username"); }, placeholder: "username", className: "username-input" }),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "email"); }, placeholder: "email", className: "email-input" }),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "password"); }, placeholder: "password", className: "password-input", type: "password" }),
            React.createElement("button", { className: "register-button", onClick: function () {
                    _this.props.checkIfUserExists(_this.state.username, _this.state.email, _this.state.password);
                } }, "Create Account")));
    };
    return Register;
}(React.Component));
exports["default"] = Register;
