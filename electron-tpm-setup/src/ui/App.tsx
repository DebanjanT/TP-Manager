import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Register from "./pages/register";
import Sample from "./pages/sample";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Write a fucntion that moves backward in navigation when user presses ESC
  const handleBack = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setModalOpen(true);
    }
  };

  // Add an event listener to the document for keydown event
  useEffect(() => {
    document.addEventListener("keydown", handleBack);
    return () => {
      document.removeEventListener("keydown", handleBack);
    };
  }, []);

  return (
    <>
      <AlertDialog open={modalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Want to go back?</AlertDialogTitle>
            <AlertDialogDescription>
              Any unsaved changes will be lost. Are you sure you want to go
              back?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setModalOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              autoFocus
              onClick={() => {
                setModalOpen(false);
                navigate(-1);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </>
  );
}

export default App;
