import React from "react";
import ReactDOM from "react-dom/client";
import NavRoutes from "./routes/NavRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavRoutes />
  </BrowserRouter>
);
