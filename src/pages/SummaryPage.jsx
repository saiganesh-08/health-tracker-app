import React from 'react';
import { motion } from 'framer-motion';

export default function SummaryPage() {
  const weeklySummary = [
    { label: '💧 Water', total: '12.5 L' },
    { label: '🏃 Exercise', total: '4 hrs' },
    { label: '🥗 Healthy Meals', total: '18 meals' },
    { label: '🛌 Sleep', total: '49 hrs' },
  ];

  const summaryQuote =
    '“A healthy outside starts from the inside.” – Robert Urich';

    
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>🌿 Weekly Summary</h1>
      <p style={{ fontSize: '1.2rem' }}>
        You've done well this week. Here's what you’ve achieved:
      </p>

      <div style={summaryContainerStyle}>
        {weeklySummary.map((item, index) => (
          <motion.div
            key={index}
            style={summaryCardStyle}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h2 style={{ margin: 0 }}>{item.label}</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.total}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={quoteBoxStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        🌸 <em>{summaryQuote}</em>
      </motion.div>

      <motion.div
        style={thankYouStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        🍃 Thank you for taking care of yourself this week!
      </motion.div>
    </motion.div>
  );
}

const summaryContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.5rem',
  marginTop: '2rem',
};

const summaryCardStyle = {
  backgroundColor: '#f1f8e9',
  borderRadius: '14px',
  padding: '1rem',
  textAlign: 'center',
  boxShadow: '0 6px 18px rgba(102,187,106,0.3)',
  color: '#33691e',
};

const quoteBoxStyle = {
  backgroundColor: '#e8f5e9',
  padding: '1.2rem',
  borderLeft: '6px solid #81c784',
  borderRadius: '12px',
  marginTop: '3rem',
  fontSize: '1.2rem',
  color: '#2e7d32',
  boxShadow: '0 0 12px rgba(165,214,167,0.5)',
};

const thankYouStyle = {
  marginTop: '2rem',
  fontSize: '1.1rem',
  textAlign: 'center',
  color: '#388e3c',
};
