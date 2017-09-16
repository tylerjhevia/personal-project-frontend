import * as React from "react";
import "../Styles/Login.css";
import Register from "../Containers/RegisterContainer";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

interface User {
  name: string;
  password: string;
  email: string;
  id: number;
  created_at: string;
  updated_at: string;
}

interface LoginProps {
  currentUser: User;
  fetchUserFromDB: Function;
}

interface LoginState {
  username: string;
  password: string;
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
