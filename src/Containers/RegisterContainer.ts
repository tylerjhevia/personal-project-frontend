import * as React from "react";
import { connect } from "react-redux";
import { createUserInDB } from "../actions/index";
import Register from "../Components/Register";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { currentUser: state.user, error: state.error };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ createUserInDB }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
