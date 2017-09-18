import * as React from "react";
import "../Styles/Login.css";
import Register from "../Containers/RegisterContainer";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { User } from "../utils/interfaces";

interface LoginProps {
  currentUser: User;
  fetchUserFromDB: Function;
  error: string;
}

interface LoginState {
  username: string;
  password: string;
}

interface Event {
  target: {
    value: string;
  };
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { username: "", password: "" };
  }

  private componentDidMount() {}

  private handleChange(value: string, field: "username" | "password"): void {
    this.setState({
      ...this.state,
      [field]: value
    });
  }

  public render() {
    if (this.props.currentUser.username) {
      return <Redirect to="/search" />;
    }
    return (
      <div className="login-div">
        <p className="error-message">
          {this.props.error
            ? this.props.error
            : "Please enter your information"}
        </p>
        <input
          onChange={(e: Event) => this.handleChange(e.target.value, "username")}
          placeholder="username"
          className="username-input"
        />

        <input
          onChange={(e: Event) => this.handleChange(e.target.value, "password")}
          placeholder="password"
          className="password-input"
          type="password"
        />
        <button
          className="login-button"
          disabled={
            this.state.username === "" || this.state.password === ""
              ? true
              : false
          }
          onClick={() => {
            this.props.fetchUserFromDB(
              this.state.username,
              this.state.password
            );
            if (this.props.currentUser.username) {
              return <Redirect to="/search" />;
            }
          }}
        >
          Submit
        </button>
        <NavLink to="/register" className="link register-link">
          Don't have an account? <span>Sign up</span>
        </NavLink>
      </div>
    );
  }
}
