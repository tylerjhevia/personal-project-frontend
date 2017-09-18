import * as React from "react";
import "../Styles/App.css";
import Login from "../Containers/LoginContainer";
import Search from "../Containers/SearchContainer";
import Register from "../Containers/RegisterContainer";
import Library from "../Containers/LibraryContainer";
import { Route, NavLink, Link } from "react-router-dom";
import { User } from "../utils/interfaces";

interface AppProps {
  user: User;
  fetchUserLibrary: Function;
}

export default class App extends React.Component<AppProps, {}> {
  public componentDidMount() {
    if (this.props.user.username) {
      this.props.fetchUserLibrary(this.props.user.id);
    }
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className="app-div">
        <header className="main-header">
          <NavLink to="/" className="site-title">
            Bookster
            <img
              className="book-icon"
              src="https://image.flaticon.com/icons/svg/167/167756.svg"
              alt="book icon"
            />
          </NavLink>
          {/*<NavLink to="/" className="link home-link">
            Home
          </NavLink>*/}
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
          {!this.props.user.username
            ? <p className="welcome-message">Welcome!</p>
            : null}
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/library" component={Library} />
        </div>
      </div>
    );
  }
}
