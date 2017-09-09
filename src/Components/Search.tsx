import * as React from "react";

interface SearchProps {
  searchResults: any;
  getBookData: Function;
}

interface SearchState {
  searchText: string;
}

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
                .searchText}`
            )}
        >
          Search
        </button>
      </div>
    );
  }
}
