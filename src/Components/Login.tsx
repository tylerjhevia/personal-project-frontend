import * as React from "react";
import "../Styles/Login.css";
import { LoginProps, LoginState, User } from "../utils/interfaces";
import Register from "../Containers/RegisterContainer";
import { NavLink } from "react-router-dom";

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { username: "", password: "" };
  }

  private handleChange(
    value: string,
    field: "username" | "password" | "email"
  ): void {
    this.setState({
      ...this.state,
      [field]: value
    });
  }

  public render() {
    return (
      <div className="login-div">
        <input
          onChange={e => this.handleChange(e.target.value, "username")}
          placeholder="username"
          className="username-input"
        />

        <input
          onChange={e => this.handleChange(e.target.value, "password")}
          placeholder="password"
          className="password-input"
        />
        <button className="login-button">Submit</button>
        <NavLink to="/register" className="link register-link">
          Don't have an account? <span>Sign up</span>
        </NavLink>
      </div>
    );
  }
}
