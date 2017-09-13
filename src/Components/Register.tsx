import * as React from "react";
import "../Styles/Register.css";
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
          onClick={() => {
            console.log("register");
            this.props.createUserInDB(
              this.state.username,
              this.state.email,
              this.state.password
            );
          }}
        >
          Create Account
        </button>
      </div>
    );
  }
}
