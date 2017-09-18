import * as React from "react";
import "../Styles/BookCard.css";
import { addFavoriteBook } from "../utils/usersAPI";
import { User, VolumeInfo, ImageLinks, BookObject } from "../utils/interfaces";
import { handleClick } from "../utils/helpers";

export interface BookCardProps {
  deleteFromLibrary: Function;
  book: BookObject;
  user: User;
  fetchUserLibrary: Function;
  inLibrary: Boolean;
  book_id: string;
  recommendBook: Function;
}

export interface Event {
  currentTarget: {
    classList: {
      toggle: Function;
    };
  };
}

const BookCard = (props: BookCardProps) => {
  console.log("book props", props);
  const { volumeInfo } = props.book;
  return (
    <div className="book-card-container">
      <div
        className="book-card"
        onClick={(e: Event) => {
          props.user.username
            ? handleClick(props, e, volumeInfo)
            : alert("not logged in");
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
      <button
        className="recommend-button"
        onClick={() => props.recommendBook(volumeInfo)}
      >
        Recommend me a book
      </button>
    </div>
  );
};

export default BookCard;
