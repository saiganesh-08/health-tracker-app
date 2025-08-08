import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaterPage() {
  const [glasses, setGlasses] = useState(0);

  const increment = () => {
    setGlasses((prev) => prev + 1);
  };

  const reset = () => {
    setGlasses(0);
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        width: '100%',
        height:'500px',
        background: 'linear-gradient(to right, #e0f7fa, #e8f5e9)',
        borderRadius: '20px',
        padding: '2rem',
        margin: 'auto',
        maxWidth: '600px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ color: '#2e7d32', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        💧 Water Tracker
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#33691e' }}>
        Stay hydrated! You've had:
      </p>

      <motion.div
        style={{
          fontSize: '4rem',
          color: '#0288d1',
          margin: 'auto',
          textAlign: 'center',
          textShadow: '0 0 15px #81d4fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      >
        {glasses} 💦
      </motion.div>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4fc3f7',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '12px',
            marginRight: '1rem',
            cursor: 'pointer',
            boxShadow: '0 0 10px #4fc3f7',
          }}
        >
          Add Glass
        </button>

        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#81d4fa',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
}
