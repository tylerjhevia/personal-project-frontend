import * as React from "react";
import { connect } from "react-redux";
import {
  fetchUserLibrary,
  deleteFromLibrary,
  recommendBook
} from "../actions/index";
import { bindActionCreators } from "redux";
import { Store } from "../utils/interfaces";
import BookCard from "../Components/BookCard";

const mapStateToProps = (state: Store) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    { fetchUserLibrary, deleteFromLibrary, recommendBook },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
