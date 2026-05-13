// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Portfolio
              theme={theme}
              setTheme={setTheme}
            />
          }
        />

        <Route
          path="*"
          element={<NotFound theme={theme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;