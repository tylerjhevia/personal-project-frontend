import * as React from "react";
import { connect } from "react-redux";
import { login } from "../actions/index";
import Login from "../Components/Login";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { currentUser: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login: login }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
