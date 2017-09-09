import * as React from "react";
import Login from "../Containers/LoginContainer";
import Search from "../Containers/SearchContainer";
import { Route, NavLink, Link } from "react-router-dom";

interface Props {}

export default class App extends React.Component<Props, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className="app-div">
        <h1>Sweet Action</h1>
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
        <Search />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}
