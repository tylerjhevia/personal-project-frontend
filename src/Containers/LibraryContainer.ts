import * as React from "react";
import { connect } from "react-redux";
import { addToLibrary } from "../actions/index";
import Library from "../Components/Library";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { library: state.library };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
