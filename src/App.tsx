import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route
          path="/s/:slug"
          element={<Navigate to="/post/:slug" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
