import { fetchUserLibrary } from "../actions/index";

export const addFavoriteBook = (
  book_id: string,
  volumeInfo: object,
  user_id: number
) => {
  fetch("http://localhost:3000/api/v1/favorites/new", {
    method: "POST",
    body: JSON.stringify({
      id: book_id,
      volumeInfo: volumeInfo,
      user_id: user_id
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(res => console.log(" user id", user_id));
};

module.exports = { addFavoriteBook };
