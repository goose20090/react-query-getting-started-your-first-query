/** @format */

import { useQuery } from "@tanstack/react-query";

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

function GitHubUser({ username }) {
  const userQuery = useQuery([username], () => fetchUser(username));

  const data = userQuery.data;

  if (userQuery.isLoading) return <p>Loading...</p>;

  if (userQuery.isError) return <p>Error: {userQuery.error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function App() {
  return (
    <div>
      <GitHubUser username="goose20090" />
    </div>
  );
}

export default App;
