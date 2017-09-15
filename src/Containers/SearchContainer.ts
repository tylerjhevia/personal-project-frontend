import * as React from "react";
import { connect } from "react-redux";
import { getBookData, fetchUserLibrary } from "../actions/index";
import Search from "../Components/Search";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { searchResults: state.searchResults, user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ getBookData, fetchUserLibrary }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
