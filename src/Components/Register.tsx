import * as React from "react";
import "../Styles/Register.css";
import { Info, User } from "../utils/interfaces";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

interface RegistrationProps {
  createUserInDB: Function;
  currentUser: User;
  error: string;
  checkIfUserExists: Function;
}

interface RegistrationState {
  username: string;
  email: string;
  password: string;
}

interface EventTarget {
  value: string;
}

interface Event {
  target: EventTarget;
}

export default class Register extends React.Component<
  RegistrationProps,
  RegistrationState
> {
  constructor(props: RegistrationProps) {
    super(props);
    this.state = { username: "", email: "", password: "" };
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
    console.log("registration props", this.props);
    if (this.props.currentUser.username) {
      return <Redirect to="/search" />;
    }
    return (
      <div className="register-div">
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
          onChange={(e: Event) => this.handleChange(e.target.value, "email")}
          placeholder="email"
          className="email-input"
        />
        <input
          onChange={(e: Event) => this.handleChange(e.target.value, "password")}
          placeholder="password"
          className="password-input"
          type="password"
        />
        <button
          className="register-button"
          disabled={
            this.state.username === "" ||
            this.state.password === "" ||
            this.state.email === ""
              ? true
              : false
          }
          onClick={() => {
            this.props.checkIfUserExists(
              this.state.username,
              this.state.email,
              this.state.password
            );
          }}
        >
          Create Account
        </button>
        <NavLink className="login-redirect" to="/">
          Already have an account? Log in
        </NavLink>
      </div>
    );
  }
}
