import React from "react";
import { useUser } from "../../shell/src/UserProvider";

const App = () => {
  const { login, loading } = useUser();

  return (
    <div>
      <button
        onClick={() => {
          login("user", "password");
        }}
      >
        Login
      </button>
      {loading && "Loading..."}
    </div>
  );
};

export default App;
