import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputForm from "./InputForm.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputForm />
    <Footer />

  </StrictMode>
);
