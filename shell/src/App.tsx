import React, { JSX } from "react";
import modules from "./../modules.json";

import { UserProvider } from "./UserProvider";

const ModuleMap = {
  null: () => null,
  app1: React.lazy(() => import("settingsApp/index")),
  app2: React.lazy(() => import("loginApp/index")),
};

if (Object.keys(modules).length !== Object.keys(ModuleMap).length - 1) {
  throw new Error("ModuleMap and modules.json are out of sync");
}

const ComponentsMap = {
  App2Button: React.lazy(() => import("loginApp/Button")),
};

const App = () => {
  const [module, setModule] = React.useState<JSX.Element | null>(null);
  const Module = ModuleMap[module];

  return (
    <div>
      <h1>shell</h1>
      <button onClick={() => setModule(null)}>no module</button>
      <button onClick={() => setModule("loginApp")}>loginApp</button>
      <button onClick={() => setModule("settingsApp")}>settingsApp</button>
      <div>
        <h2>selected module: {module}</h2>
        <UserProvider>
          <React.Suspense fallback="Loading Modules...">
            <Module />
          </React.Suspense>
        </UserProvider>
      </div>
    </div>
  );
};

export default App;
