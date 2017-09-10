import * as React from "react";
import "../Styles/App.css";
import Login from "../Containers/LoginContainer";
import Search from "../Containers/SearchContainer";
import Register from "../Containers/RegisterContainer";
import { Route, NavLink, Link } from "react-router-dom";

interface Props {}

export default class App extends React.Component<Props, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className="app-div">
        <header>
          <h1>Sweet Action</h1>
          <NavLink to="/login" className="login-link">
            Login
          </NavLink>
          <NavLink to="/register" className="login-link">
            Register
          </NavLink>
        </header>
        <Search />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}
