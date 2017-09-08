import * as React from "react";
import * as DOM from "react-dom";

type LoginState = any;

type LoginProps = any;

type username = string;

type email = string;
export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
    super();
    this.state {
      username: string,
      email: string
    };
  }
  render() {
    return (
      <div className="login-div">
        <input placeholder="email" />
        <input placeholder="username" />
      </div>
    );
  }
}
