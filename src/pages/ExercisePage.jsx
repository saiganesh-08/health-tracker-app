import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExercisePage() {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [log, setLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && duration) {
      setLog([...log, { exercise, duration }]);
      setExercise('');
      setDuration('');
    }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>🏃 Exercise Tracker</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Log your workouts and stay fit!
      </p>

      <motion.form
        onSubmit={handleSubmit}
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          placeholder="Exercise (e.g., Yoga)"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Add Workout
        </button>
      </motion.form>

      <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0 }}>
        {log.map((item, index) => (
          <motion.li
            key={index}
            style={{
              backgroundColor: '#c8e6c9',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              marginBottom: '0.75rem',              
              width: '100%',
              height:'500px',
              color: '#2e7d32',
              fontWeight: '500',
              boxShadow: '0 0 8px #a5d6a7',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ {item.exercise} – {item.duration} min
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

const inputStyle = {
  padding: '10px 15px',
  width: '250px',
  borderRadius: '10px',
  border: '1px solid #66bb6a',
  backgroundColor: '#f1f8e9',
  fontSize: '1rem',
  color: '#33691e',
  boxShadow: '0 0 8px #a5d6a7 inset',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#66bb6a',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  boxShadow: '0 0 12px #66bb6a',
};
