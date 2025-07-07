// src/router/index.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperienceFeed from "../pages/ExperienceFeed";
import ShareExperience from "../pages/ShareExperience";
import Menu from "../pages/Menu";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/feed" element={<ExperienceFeed />} />
        <Route path="/share" element={<ShareExperience />} />
      </Routes>
    </Router>
  );
}
