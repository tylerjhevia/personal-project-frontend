import * as React from "react";
import "../Styles/App.css";
import Login from "../Containers/LoginContainer";
import Search from "../Containers/SearchContainer";
import Register from "../Containers/RegisterContainer";
import Library from "../Containers/LibraryContainer";
import { Route, NavLink, Link } from "react-router-dom";

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className="app-div">
        <header className="main-header">
          <NavLink to="/" className="link home-link">
            Home
          </NavLink>
          <NavLink to="/register" className="link register-link">
            Register
          </NavLink>
          <NavLink to="/library" className="link library-link">
            Library
          </NavLink>
          <NavLink to="/search" className="link search-link">
            Search
          </NavLink>
        </header>
        <div className="current-view">
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/library" component={Library} />
        </div>
      </div>
    );
  }
}
