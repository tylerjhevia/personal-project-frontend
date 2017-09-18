import * as React from "react";
import { connect } from "react-redux";
import { fetchUserFromDB } from "../actions/index";
import Login from "../Components/Login";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { currentUser: state.user, error: state.error };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchUserFromDB }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
