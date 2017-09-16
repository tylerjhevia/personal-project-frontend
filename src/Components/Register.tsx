import * as React from "react";
import "../Styles/Register.css";
import { Info } from "../utils/interfaces";
import { Redirect } from "react-router";

interface User {
  name: string;
  password: string;
  email: string;
  id: number;
  created_at: string;
  updated_at: string;
}

interface RegistrationProps {
  createUserInDB: Function;
  currentUser: User;
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
    if (this.props.currentUser.username) {
      return <Redirect to="/search" />;
    }
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
