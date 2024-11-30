import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Sample from "./pages/sample";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  // Write a fucntion that moves backward in navigation when user presses ESC
  const handleBack = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      navigate(-1);
    }
  };

  // Add an event listener to the document for keydown event
  useEffect(() => {
    document.addEventListener("keydown", handleBack);
    return () => {
      document.removeEventListener("keydown", handleBack);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </>
  );
}

export default App;
