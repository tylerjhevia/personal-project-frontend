import * as React from "react";
import { connect } from "react-redux";
import { fetchUserLibrary } from "../actions/index";
import { bindActionCreators } from "redux";
import { Store, User } from "../utils/interfaces";
import App from "../Components/App";

interface StateFromProps {
  user: User;
}

interface DispatchFromProps {
  fetchUserLibrary: () => any;
}

const mapStateToProps = (state: Store) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchUserLibrary }, dispatch);
};

export default connect<StateFromProps, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(App);
