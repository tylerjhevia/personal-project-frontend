import * as React from "react";
import { connect } from "react-redux";
import { fetchUserLibrary } from "../actions/index";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";
import App from "../Components/App";

const mapStateToProps = (state: Store) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchUserLibrary }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
