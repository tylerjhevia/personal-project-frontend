import * as React from "react";
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
          onChange={e => this.handleChange(e.target.value, "username")}
          placeholder="username"
          className="username-input"
        />
        <input
          onChange={e => this.handleChange(e.target.value, "email")}
          placeholder="email"
          className="email-input"
        />
        <input
          onChange={e => this.handleChange(e.target.value, "password")}
          placeholder="password"
          className="password-input"
        />
        <button
          className="register-button"
          onClick={e =>
            this.props.register({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            })}
        >
          Create Account
        </button>
      </div>
    );
  }
}
