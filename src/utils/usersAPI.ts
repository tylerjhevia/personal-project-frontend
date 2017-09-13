export const fetchUserFromDB = (username: string, password: string) => {
  return fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(results => results.json())
    .then(response => console.log("found user", response))
    .catch(error => error.message);
};

export const createUserInDB = (
  username: string,
  password: string,
  email: string
) => {
  return fetch("http://localhost:3000/api/v1/users/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email })
  })
    .then(results => results.json())
    .then(response => console.log("created user", response))
    .catch(error => error.message);
};

module.exports = { fetchUserFromDB, createUserInDB };
