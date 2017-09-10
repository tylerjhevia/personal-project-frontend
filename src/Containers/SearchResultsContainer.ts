import * as React from "react";
import { connect } from "react-redux";
import SearchResults from "../Components/SearchResults";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({});
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
