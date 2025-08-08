// src/routes.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import FoodPage from './pages/FoodPage';
import WaterPage from './pages/WaterPage';
import ExercisePage from '../health-tracker-nature/src/pages/ExercisePage';
import RemindersPage from '../health-tracker-nature/src/pages/RemindersPage';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FoodPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/reminders" element={<RemindersPage />} />
      </Routes>
    </AnimatePresence>
  );
}
