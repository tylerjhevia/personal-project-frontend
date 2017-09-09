import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Route, NavLink, Link, BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers/index.js";
import App from "./Components/App";

let initialState = {};
const devtools: any = window["devToolsExtension"]
  ? window["devToolsExtension"]()
  : (f: any) => f;
let middleware = applyMiddleware(thunk);
const store: any = middleware(devtools(createStore))(rootReducer, initialState);

//
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById("root"));
