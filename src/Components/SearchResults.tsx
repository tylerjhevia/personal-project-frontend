import * as React from "react";
import BookCard from "../Containers/BookCardContainer";
import "../Styles/SearchResults.css";
import { BookObject, VolumeInfo, ImageLinks } from "../utils/interfaces";

interface SearchResultsProps {
  searchResults: Array<BookObject>;
}

const SearchResults = (props: SearchResultsProps) => {
  const mappedResults = props.searchResults.map(book =>
    <BookCard key={book.id} book={book} inLibrary={false} book_id={book.id} />
  );
  return (
    <div className="search-results-div">
      {mappedResults}
    </div>
  );
};

export default SearchResults;
