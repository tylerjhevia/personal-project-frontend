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
var LibraryContainer_1 = require("../Containers/LibraryContainer");
var react_router_dom_1 = require("react-router-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        if (this.props.user.username) {
            this.props.fetchUserLibrary(this.props.user.id);
        }
    };
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "app-div" },
            React.createElement("header", { className: "main-header" },
                React.createElement(react_router_dom_1.NavLink, { to: "/", className: "site-title" },
                    "Bookster",
                    React.createElement("img", { className: "book-icon", src: "https://image.flaticon.com/icons/svg/167/167756.svg", alt: "book icon" })),
                React.createElement(react_router_dom_1.NavLink, { to: "/register", className: "link register-link", onClick: function () {
                        if (_this.props.user.username) {
                            return _this.props.logout();
                        }
                    } }, this.props.user.username ? "Logout" : "Register"),
                React.createElement(react_router_dom_1.NavLink, { to: "/library", className: "link library-link" }, "Library"),
                React.createElement(react_router_dom_1.NavLink, { to: "/search", className: "link search-link" }, "Search")),
            React.createElement("div", { className: "current-view" },
                !this.props.user.username
                    ? React.createElement("p", { className: "welcome-message" }, "Welcome!")
                    : null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: LoginContainer_1["default"] }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/search", component: SearchContainer_1["default"] }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: RegisterContainer_1["default"] }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/library", component: LibraryContainer_1["default"] }))));
    };
    return App;
}(React.Component));
exports["default"] = App;
