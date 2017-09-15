import * as React from "react";
import BookCard from "../Containers/BookCardContainer";
import "../Styles/SearchResults.css";

interface SearchResultsProps {
  searchResults: Array<BookObject>;
}

interface BookObject {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: object;
  accessInfo: object;
  searchInfo: object;
}

interface VolumeInfo {
  imageLinks: ImageLinks;
  authors: Array<string>;
  title: string;
  description: string;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

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
