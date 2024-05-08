import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        {publicRoutes.map((routeItem) => {
          return (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              element={routeItem.element}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
