import * as React from "react";
import { connect } from "react-redux";
import { getBookData } from "../actions/index";
import Search from "../Components/Search";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBookData: getBookData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
