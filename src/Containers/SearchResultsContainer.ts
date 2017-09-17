import * as React from "react";
import { connect } from "react-redux";
import SearchResults from "../Components/SearchResults";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";
import { addToLibrary } from "../actions/index";

const mapStateToProps = (state: Store) => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addToLibrary }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
