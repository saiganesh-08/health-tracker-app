import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>🌿 Welcome to NatureTrack!</h1>
      <p>Track your health in a calm and refreshing way.</p>
      <button className="start-button" onClick={() => navigate('/dashboard')}>
        Get Started 🌱
      </button>
    </div>
  );
}
