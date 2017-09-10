import * as React from "react";
import { LoginProps, LoginState, User } from "../utils/interfaces";

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
      </div>
    );
  }
}
