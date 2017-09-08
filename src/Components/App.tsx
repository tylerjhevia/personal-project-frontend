import * as React from "react";
import * as DOM from "react-dom";
import "../Styles/App.css";
import Login from "./Login";

type AppState = {
  message: string;
};

type AppProps = any;

export default class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      message: "typescripting"
    };
  }
  render() {
    return (
      <div className="App">
        <Login email="me" username="tyler" />
      </div>
    );
  }
}
