import * as React from "react";

type BookCard = any;

const BookCard = (props: BookCard) => {
  const { volumeInfo } = props.book;
  return (
    <div className="book-card">
      <h4>
        {volumeInfo.title}
      </h4>
      <h5>
        {volumeInfo.authors ? volumeInfo.authors[0] : "No author, I guess"}
      </h5>
      <p>
        {volumeInfo.description}
      </p>
      <img
        src={
          volumeInfo.imageLinks
            ? volumeInfo.imageLinks.smallThumbnail
            : "https://pbs.twimg.com/profile_images/565602752152076288/NxWEBoTo.jpeg"
        }
      />
    </div>
  );
};

export default BookCard;
