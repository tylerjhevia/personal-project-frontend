import * as React from "react";
import { connect } from "react-redux";
import { fetchUserLibrary, deleteFromLibrary } from "../actions/index";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";
import BookCard from "../Components/BookCard";

const mapStateToProps = (state: Store) => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserLibrary, deleteFromLibrary }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
