import React from "react";
import { useUser } from "shell/UserProvider";

const App = () => {
  const { user, logout, loading } = useUser();

  return (
    <div>
      <h1>User Settings</h1>
      {user ? (
        <>
          <div>Hello, {user.name}</div>
          <button onClick={logout}>Logout</button>
          {loading && "Loading..."}
        </>
      ) : (
        "User not logged in. Redirecting to login page..."
      )}
    </div>
  );
};

export default App;
