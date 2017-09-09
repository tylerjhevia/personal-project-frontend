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
var LoginContainer_1 = require("../Containers/LoginContainer");
var SearchContainer_1 = require("../Containers/SearchContainer");
var react_router_dom_1 = require("react-router-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "app-div" },
            React.createElement("h1", null, "Sweet Action"),
            React.createElement(react_router_dom_1.NavLink, { to: "/login", className: "login-link" }, "Login"),
            React.createElement(SearchContainer_1["default"], null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LoginContainer_1["default"] })));
    };
    return App;
}(React.Component));
exports["default"] = App;
