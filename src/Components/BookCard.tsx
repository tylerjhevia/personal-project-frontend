import * as React from "react";
import "../Styles/BookCard.css";

type BookCard = any;

const BookCard = (props: BookCard) => {
  const { volumeInfo } = props.book;
  return (
    <div className="book-card">
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
