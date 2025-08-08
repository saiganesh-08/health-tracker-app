import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import "../App.css";

const HomePage = () => {
  return (
    <div className="page-container">
      <ParticlesBackground />

      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="glow-heading">🌌 Health Tracker</h1>
        <p className="tagline">Track your food, water, exercise, and reminders in a cosmic way!</p>

        <div className="navigation">
          <a href="/Mood" className="nav-btn">😃 Mood</a>
          <a href="/food" className="nav-btn">🍎 Food</a>
          <a href="/water" className="nav-btn">💧 Water</a>
          <a href="/exercise" className="nav-btn">🏋️ Exercise</a>
          <a href="/reminders" className="nav-btn">⏰ Reminders</a>
          <a href="/summary" className="nav-btn">📊 Summary</a>
          <a href="/progress" className="nav-btn">📈 Progress</a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
