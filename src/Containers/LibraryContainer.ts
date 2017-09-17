import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Library from "../Components/Library";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { library: state.library, user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
