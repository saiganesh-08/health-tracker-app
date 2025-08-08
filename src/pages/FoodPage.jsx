import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FoodPage() {
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState([]);

  const addMeal = () => {
    if (meal.trim()) {
      setMeals([...meals, meal]);
      setMeal('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
        width: '100%',
        height:'500px',
        maxWidth: '800px',
        backgroundColor: '#f5f5f5',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        right: 0,
        left: 0,
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '1.5rem', color: '#2e7d32' }}>🌿 Food Tracker</h1>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={meal}
            placeholder="Enter meal (e.g., Salad)"
            onChange={(e) => setMeal(e.target.value)}
            style={{
              flex: '1 1 auto',
              minWidth: '200px',
              padding: '10px',
              borderRadius: '10px',
              border: '2px solid #a0c781',
              fontSize: '16px',
            }}
          />
          <button
            onClick={addMeal}
            style={{
              padding: '10px 20px',
              backgroundColor: '#66bb6a',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              flexShrink: 0,
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
          {meals.map((m, idx) => (
            <li key={idx} style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>
              🥗 {m}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
