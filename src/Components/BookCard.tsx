import * as React from "react";
import "../Styles/BookCard.css";
import { addFavoriteBook } from "../utils/usersAPI";

interface BookCardProps {
  addToLibrary: Function;
  book: BookObject;
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

const BookCard = (props: BookCardProps) => {
  const { volumeInfo } = props.book;

  return (
    <div
      className="book-card"
      onClick={() => {
        if (props.user.id === 0) {
          addFavoriteBook(props.book.id, volumeInfo, props.user.id);
        }
      }}
    >
      <img
        className="book-image"
        src={
          volumeInfo.imageLinks
            ? volumeInfo.imageLinks.smallThumbnail
            : "https://pbs.twimg.com/profile_images/565602752152076288/NxWEBoTo.jpeg"
        }
      />
      <div className="book-details">
        <h4 className="book-title">
          {volumeInfo.title}
        </h4>
        <h5 className="book-author">
          {volumeInfo.authors ? volumeInfo.authors[0] : "No author, I guess"}
        </h5>
        <p className="book-description">
          {volumeInfo.description}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
