import * as React from "react";
import Card from "../Containers/BookCardContainer";
import { LibraryProps } from "../utils/interfaces";
import "../Styles/Library.css";

const Library = (props: LibraryProps) => {
  let mappedLibraryBooks = props.library.map(book => <Card book={book} />);
  return (
    <div className="library-div">
      {mappedLibraryBooks ? mappedLibraryBooks : "Your library is empty"}
    </div>
  );
};

export default Library;
