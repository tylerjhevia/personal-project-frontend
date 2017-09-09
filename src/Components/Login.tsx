import * as React from "react";

interface LoginProps {
  login: Function;
  user: object;
}

interface LoginState {
  username: string;
  email: string;
  password: string;
}
export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
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
      <div className="login-div">
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
          className="login-button"
          onClick={e =>
            this.props.login({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            })}
        >
          Submit
        </button>
      </div>
    );
  }
}
