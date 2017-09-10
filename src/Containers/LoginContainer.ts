import * as React from "react";
import { connect } from "react-redux";
import { register } from "../actions/index";
import Login from "../Components/Login";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { currentUser: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
