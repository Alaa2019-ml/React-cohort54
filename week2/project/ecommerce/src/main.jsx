import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <Router>
  //   <Routes>
  //     <Route>

  //     </Route>
  //   </Routes>
  // </Router>
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
