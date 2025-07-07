import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExperienceFeed from './pages/ExperienceFeed';
import ShareExperience from './pages/ShareExperience';
import Menu from './pages/Menu';
import PremiumModal from './components/PremiumModal';

const App = () => {
  return (
    <div className="bg-backgroundDark min-h-screen text-white">
      <Routes>
        <Route path="/" element={<ExperienceFeed />} />
        <Route path="/submit" element={<ShareExperience />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      {/* Global Premium Modal Logic (stub) */}
      <PremiumModal />
    </div>
  );
};

export default App;
