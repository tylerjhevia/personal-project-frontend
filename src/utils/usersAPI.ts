export const fetchUserFromDB = (username: string, password: string) => {
  return fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(results => results.json())
    .then(response => console.log("found user", response));
};

module.exports = { fetchUserFromDB };
