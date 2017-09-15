// export const addFavoriteBook = (
//   title: string,
//   author: string,
//   google_id: string,
//   user_id: number
// ) => {
//   fetch("http://localhost:3000/api/v1/favorites/new", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title, author, google_id, user_id })
//   })
//     .then(res => res.json())
//     .then(res => alert("hey"))
//     .catch(error => error.message);
// };

export const addFavoriteBook = (
  id: string,
  volumeInfo: object,
  user_id: number
) => {
  console.log("fetching favorites");
  fetch("http://localhost:3000/api/v1/favorites/new", {
    method: "POST",
    body: JSON.stringify({ id: id, volumeInfo: volumeInfo, user_id: user_id }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(res => console.log(" user id", user_id));
};

module.exports = { addFavoriteBook };
