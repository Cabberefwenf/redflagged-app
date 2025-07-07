import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="text-flagGreen hover:underline">
            🔍 View Feed
          </Link>
        </li>
        <li>
          <Link to="/submit" className="text-flagYellow hover:underline">
            📝 Submit a Report
          </Link>
        </li>
        <li>
          <button className="text-premiumGold hover:underline">
            💎 Upgrade to Premium (stub)
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
