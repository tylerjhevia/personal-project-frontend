import * as React from "react";
import "../Styles/Login.css";
import { LoginProps, LoginState, User } from "../utils/interfaces";
import Register from "../Containers/RegisterContainer";
import { NavLink } from "react-router-dom";
import { fetchUserFromDB } from "../utils/usersAPI";

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { username: "", password: "" };
  }

  private componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(data => data.json())
      .then(data => console.log(data));
  }

  private handleChange(value: string, field: "username" | "password"): void {
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
        <button
          className="login-button"
          onClick={() => {
            this.props.fetchUserFromDB(
              this.state.username,
              this.state.password
            );
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
