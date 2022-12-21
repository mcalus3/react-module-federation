import React from "react";
import { useUser } from "../../shell/src/UserProvider";

const App = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>User Settings</h1>
      {user
        ? JSON.stringify(user, null, 2)
        : "User not logged in. Redirecting to login page..."}
    </div>
  );
};

export default App;
