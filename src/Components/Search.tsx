import * as React from "react";
import SearchResults from "../Containers/SearchResultsContainer";
import "../Styles/Search.css";

interface User {
  name: string;
  password: string;
  email: string;
  id: number;
  created_at: string;
  updated_at: string;
}

interface SearchProps {
  fetchUserLibrary: Function;
  getBookData: Function;
  user: User;
}

interface SearchState {
  searchText: string;
}

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchText: "" };
  }

  private componentDidMount() {
    // this.props.fetchUserLibrary(this.props.user.id);
  }

  private handleInput(input: string) {
    this.setState({ ...this.state, searchText: input });
  }

  public render() {
    console.log("search", this.props);
    return (
      <div className="search-div">
        <p className="logged-in-status">
          {this.props.user.username
            ? `Logged in as ${this.props.user.username}`
            : "Please log in"}
        </p>
        <input
          className="search-input"
          placeholder="Search for a book"
          onChange={e => this.handleInput(e.target.value)}
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
