import * as React from "react";
import SearchResults from "../Containers/SearchResultsContainer";
import { SearchProps, SearchState } from "../utils/interfaces";
import "../Styles/Search.css";

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchText: "" };
  }

  private handleInput(input: string) {
    this.setState({ ...this.state, searchText: input });
  }

  public render() {
    return (
      <div className="search-div">
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
        {this.props.searchResults === "books"
          ? <p>NO RESULTS</p>
          : <SearchResults />}
      </div>
    );
  }
}
