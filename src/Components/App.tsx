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
        <header className="main-header">
          <NavLink to="/" className="link home-link">
            Sweet Action
          </NavLink>
          <NavLink to="/login" className="link login-link">
            Login
          </NavLink>
          <NavLink to="/register" className="link register-link">
            Register
          </NavLink>
        </header>
        <div className="current-view">
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    );
  }
}
