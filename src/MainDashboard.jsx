// src/MainDashboard.jsx
import React, { useState } from 'react';
import FoodPage from './pages/FoodPage';
import MoodPage from './pages/MoodPage';
import WaterPage from './pages/WaterPage';
import ExercisePage from './pages/ExercisePage';
import SummaryPage from './pages/SummaryPage';
import RemindersPage from './pages/RemindersPage';
import ProgressPage from './pages/ProgressPage';
import './styles/dashboard.css';

const tabs = [
  'Food',  'Mood', 'Water', 'Exercise', 'Reminders', 'Summary', 'Progress',
];

export default function MainDashboard() {
  const [activeTab, setActiveTab] = useState('Food');

  const renderPage = () => {
    switch (activeTab) {
      case 'Food': return <FoodPage />;
      case 'Sleep': return <SleepPage />;
      case 'Mood': return <MoodPage />;
      case 'Water': return <WaterPage />;
      case 'Exercise': return <ExercisePage />;
      case 'Summary': return <SummaryPage />;
      case 'Reminders': return <RemindersPage />;
      case 'Progress': return <ProgressPage />;
      default: return <FoodPage />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderPage()}
      </div>
    </div>
  );
}
