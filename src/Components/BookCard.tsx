import * as React from "react";
import "../Styles/BookCard.css";
import { addFavoriteBook } from "../utils/usersAPI";
import { User, VolumeInfo, ImageLinks, BookObject } from "../utils/interfaces";

interface BookCardProps {
  deleteFromLibrary: Function;
  book: BookObject;
  user: User;
  fetchUserLibrary: Function;
  inLibrary: Boolean;
  book_id: string;
}

interface Event {
  currentTarget: {
    classList: {
      toggle: Function;
    };
  };
}

function handleClick(props: BookCardProps, e: Event, volumeInfo: VolumeInfo) {
  if (props.inLibrary === true) {
    props.deleteFromLibrary(props.user.id, props.book_id);
    e.currentTarget.classList.toggle("hidden");
    props.fetchUserLibrary(props.user.id);
  } else {
    addFavoriteBook(props.book_id, volumeInfo, props.user.id);
    e.currentTarget.classList.toggle("selected");
    props.fetchUserLibrary(props.user.id);
  }

  props.fetchUserLibrary(props.user.id);
}

const BookCard = (props: BookCardProps) => {
  console.log("book props", props);
  const { volumeInfo } = props.book;
  return (
    <div
      className="book-card"
      onClick={(e: Event) => {
        props.user.username ? handleClick(props, e, volumeInfo) : alert("fart");
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
