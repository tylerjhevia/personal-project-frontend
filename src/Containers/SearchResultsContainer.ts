import * as React from "react";
import { connect } from "react-redux";
import SearchResults from "../Components/SearchResults";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";

const mapStateToProps = (state: Store) => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
