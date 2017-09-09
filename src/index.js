"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_thunk_1 = require("redux-thunk");
var react_router_dom_1 = require("react-router-dom");
var index_js_1 = require("./reducers/index.js");
var App_1 = require("./Components/App");
var initialState = {};
var devtools = window["devToolsExtension"]
    ? window["devToolsExtension"]()
    : function (f) { return f; };
var middleware = redux_1.applyMiddleware(redux_thunk_1["default"]);
var store = middleware(devtools(redux_1.createStore))(index_js_1["default"], initialState);
//
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
var router = (React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Route, { path: "/", component: App_1["default"] }))));
react_dom_1.render(router, document.getElementById("root"));
