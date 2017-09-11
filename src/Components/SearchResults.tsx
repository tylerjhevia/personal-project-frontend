import * as React from "react";
import BookCard from "./BookCard";
import { BookObject, SearchResultsProps } from "../utils/interfaces";
import "../Styles/SearchResults.css";

const SearchResults = (props: SearchResultsProps) => {
  const mappedResults = props.searchResults.map(book =>
    <BookCard key={book.id} book={book} />
  );
  return (
    <div className="search-results-div">
      {mappedResults}
    </div>
  );
};

export default SearchResults;
