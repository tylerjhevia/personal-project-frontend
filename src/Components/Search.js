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
var SearchResultsContainer_1 = require("../Containers/SearchResultsContainer");
require("../Styles/Search.css");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { searchText: "" };
        return _this;
    }
    Search.prototype.componentDidMount = function () {
        // this.props.fetchUserLibrary(this.props.user.id);
    };
    Search.prototype.handleInput = function (input) {
        this.setState(__assign({}, this.state, { searchText: input }));
    };
    Search.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "search-div" },
            React.createElement("p", { className: "logged-in-status" }, this.props.user.username
                ? "Logged in as " + this.props.user.username
                : "Please log in"),
            React.createElement("input", { className: "search-input", placeholder: "Search for a book", onChange: function (e) { return _this.handleInput(e.target.value); } }),
            React.createElement("button", { className: "search-button", onClick: function () {
                    return _this.props.getBookData("https://www.googleapis.com/books/v1/volumes?q=" + (_this.state
                        .searchText || "a"));
                } }, "Search"),
            this.props.searchResults === []
                ? React.createElement("p", null, "NO RESULTS")
                : React.createElement(SearchResultsContainer_1["default"], null)));
    };
    return Search;
}(React.Component));
exports["default"] = Search;
