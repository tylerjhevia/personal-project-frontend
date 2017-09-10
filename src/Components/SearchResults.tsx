import * as React from "react";
import BookCard from "./BookCard";

interface SearchResultsProps {
  searchResults: Array<Object>;
}

const SearchResults = (props: SearchResultsProps) => {
  const mappedResults = props.searchResults.map(book =>
    <BookCard key={book.id} book={book} />
  );
  return (
    <div className="search-results-div">
      <h3>
        {mappedResults}
      </h3>
    </div>
  );
};

export default SearchResults;
