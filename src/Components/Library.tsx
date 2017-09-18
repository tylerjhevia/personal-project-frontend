import * as React from "react";
import BookCard from "../Containers/BookCardContainer";
import "../Styles/Library.css";
import { Redirect } from "react-router";
import { User, ImageLinks, VolumeInfo } from "../utils/interfaces";

interface LibraryProps {
  library: Array<BookObject>;
  fetchUserProps: Function;
  user: User;
}

interface BookObject {
  kind: string;
  book_id: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: object;
  accessInfo: object;
  searchInfo: object;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

const Library = (props: LibraryProps) => {
  if (props.user.username === null) {
    return <Redirect to="/search" />;
  }
  let mappedLibraryBooks;
  props.library !== []
    ? (mappedLibraryBooks = props.library.map(book =>
        <BookCard
          book={book}
          inLibrary={true}
          key={book.id}
          book_id={book.book_id}
        />
      ))
    : "Your library is empty!";
  return (
    <div className="library-div">
      {props.library !== []
        ? mappedLibraryBooks
        : <p className='empty-message'>No books in here</p>}
    </div>
  );
};

export default Library;
