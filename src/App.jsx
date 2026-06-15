// App.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Portfolio from "./pages/Portfolio";

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;