import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(11, 15, 22, 0.95)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            color: "#fff",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </div>
  );
}

export default App;