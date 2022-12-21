import React from "react";
import { useUser } from "shell/UserProvider";

const App = () => {
  const { user, login, loading } = useUser();
  // const { login, loading } = { login: (_, _2) => {}, loading: false };

  return (
    <div>
      <h1>Login Page</h1>
      {user ? (
        "User logged in, redirecting to settings page..."
      ) : (
        <button
          onClick={() => {
            login("user", "password");
          }}
        >
          Login
        </button>
      )}
      {loading && "Loading..."}
    </div>
  );
};

export default App;
