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
exports.__esModule = true;
var React = require("react");
require("../Styles/App.css");
var LoginContainer_1 = require("../Containers/LoginContainer");
var SearchContainer_1 = require("../Containers/SearchContainer");
var RegisterContainer_1 = require("../Containers/RegisterContainer");
var react_router_dom_1 = require("react-router-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "app-div" },
            React.createElement("header", { className: "main-header" },
                React.createElement(react_router_dom_1.NavLink, { to: "/", className: "link home-link" }, "Search"),
                React.createElement(react_router_dom_1.NavLink, { to: "/login", className: "link login-link" }, "Login"),
                React.createElement(react_router_dom_1.NavLink, { to: "/register", className: "link register-link" }, "Register")),
            React.createElement("div", { className: "current-view" },
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: SearchContainer_1["default"] }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LoginContainer_1["default"] }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: RegisterContainer_1["default"] }))));
    };
    return App;
}(React.Component));
exports["default"] = App;
