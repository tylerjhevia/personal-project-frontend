import * as React from "react";
import SearchResults from "../Containers/SearchResultsContainer";
import "../Styles/Search.css";
import { User, BookObject } from "../utils/interfaces";
import { Redirect } from "react-router";

interface SearchProps {
  fetchUserLibrary: Function;
  getBookData: Function;
  user: User;
  searchResults: Array<BookObject>;
}

interface SearchState {
  searchText: string;
}

interface Event {
  target: {
    value: string;
  };
}

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchText: "" };
  }

  public componentDidMount() {
    console.log("search props", this.props);
    if (this.props.user.username) {
      this.props.fetchUserLibrary(this.props.user.id);
    }
  }

  private handleInput(input: string) {
    this.setState({ ...this.state, searchText: input });
  }

  public render() {
    if (!this.props.user.username) {
      return <Redirect to="/" />;
    }
    return (
      <div className="search-div">
        <p className="logged-in-status">
          {this.props.user.username
            ? `Logged in as: ${this.props.user.username}`
            : "Please log in"}
        </p>
        <input
          className="search-input"
          placeholder="Search for a book"
          onChange={(e: Event) => this.handleInput(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() =>
            this.props.getBookData(
              `https://www.googleapis.com/books/v1/volumes?q=${this.state
                .searchText || "a"}`
            )}
        >
          Search
        </button>
        {this.props.searchResults === []
          ? <p>NO RESULTS</p>
          : <SearchResults />}
      </div>
    );
  }
}
