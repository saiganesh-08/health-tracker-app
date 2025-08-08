import React, { useState } from 'react';
import { motion } from 'framer-motion';

const moods = ['😃', '🙂', '😐', '😟', '😢'];

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>🧠 Track Your Mood</h1>
      <p>Select how you're feeling today:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {moods.map((mood, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedMood(mood)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={{
              fontSize: '2.2rem',
              padding: '0.5rem 1rem',
              border: 'none',  
              background: selectedMood === mood ? '#c8e6c9' : 'transparent',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: selectedMood === mood ? '0 0 10px #66bb6a' : 'none',
            }}
          >
            {mood}
          </motion.button>
        ))}
      </div>
      {selectedMood && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#388e3c' }}>
          You feel {selectedMood === '😃' ? 'great' : selectedMood === '😢' ? 'low' : 'okay'} today.
        </motion.div>
      )}
    </motion.div>
  );
}
