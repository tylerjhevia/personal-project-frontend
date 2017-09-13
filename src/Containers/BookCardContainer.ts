import * as React from "react";
import { connect } from "react-redux";
import { addToLibrary } from "../actions/index";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";
import BookCard from "../Components/BookCard";

const mapStateToProps = (state: Store) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToLibrary }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
