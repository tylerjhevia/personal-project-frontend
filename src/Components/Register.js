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
        return (React.createElement("div", { className: "register-div" },
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "username"); }, placeholder: "username", className: "username-input" }),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "email"); }, placeholder: "email", className: "email-input" }),
            React.createElement("input", { onChange: function (e) { return _this.handleChange(e.target.value, "password"); }, placeholder: "password", className: "password-input" }),
            React.createElement("button", { className: "register-button", onClick: function (e) {
                    return _this.props.register({
                        username: _this.state.username,
                        email: _this.state.email,
                        password: _this.state.password
                    });
                } }, "Create Account")));
    };
    return Register;
}(React.Component));
exports["default"] = Register;
