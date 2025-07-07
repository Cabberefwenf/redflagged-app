import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Menu from "./pages/Menu";
import ShareExperience from "./pages/ShareExperience";
import ExperienceFeed from "./pages/ExperienceFeed";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/share" element={<ShareExperience />} />
        <Route path="/feed" element={<ExperienceFeed />} />
      </Routes>
    </Router>
  );
}
