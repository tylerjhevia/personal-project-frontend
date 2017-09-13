import * as React from "react";
import "../Styles/Register.css";
import { createUserInDB } from "../utils/usersAPI";
import {
  Info,
  RegistrationProps,
  RegistrationState
} from "../utils/interfaces";

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
    return (
      <div className="register-div">
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
        />
        <button
          className="register-button"
          onClick={(e: Event) => {
            this.props.register({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            });
            createUserInDB(
              this.state.username,
              this.state.password,
              this.state.email
            );
          }}
        >
          Create Account
        </button>
      </div>
    );
  }
}
