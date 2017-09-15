import * as React from "react";
import Card from "../Containers/BookCardContainer";
import "../Styles/Library.css";

interface LibraryProps {
  library: Array<BookObject>;
  fetchUserProps: Function;
  user: object;
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

export interface VolumeInfo {
  imageLinks: ImageLinks;
  authors: Array<string>;
  title: string;
  description: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

const Library = (props: LibraryProps) => {
  if (props.user[0]) {
    props.fetchUserLibrary(props.user[0].id);
  }
  let mappedLibraryBooks;
  props.library !== []
    ? (mappedLibraryBooks = props.library.map(book => <Card book={book} />))
    : (mappedLibraryBooks = "uh-oh");
  return (
    <div className="library-div">
      {mappedLibraryBooks}
    </div>
  );
};

export default Library;
