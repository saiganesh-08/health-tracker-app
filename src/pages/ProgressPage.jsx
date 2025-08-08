import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ProgressPage() {
  const [tab, setTab] = useState('weekly');

  const dailyData = {
    labels: ['Water (L)', 'Sleep (hrs)', 'Food (kcal)', 'Exercise (min)'],
    
    datasets: [
      {
        label: 'Today',
        data: [2.1, 7.5, 1800, 40],
        backgroundColor: ['#81c784', '#64b5f6', '#ffb74d', '#e57373'],
      },
    ],
  };

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water (L)',
        data: [1.5, 2, 1.8, 2.2, 2.5, 2.3, 2.1],
        borderColor: '#66bb6a',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Sleep (hrs)',
        data: [6, 7, 8, 6.5, 7.5, 8, 7],
        borderColor: '#42a5f5',
        tension: 0.4,
        fill: false,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#2e7d32', font: { size: 14 } },
      },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#33691e' } },
      x: { ticks: { color: '#33691e' } },
    },
  };
  return (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>📈 Progress Tracker</h1>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        <button
          onClick={() => setTab('daily')}
          style={{
            backgroundColor: tab === 'daily' ? '#a5d6a7' : '#f1f8e9',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Daily
        </button>
        <button
          onClick={() => setTab('weekly')}
          style={{
            backgroundColor: tab === 'weekly' ? '#a5d6a7' : '#f1f8e9',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Weekly
        </button>
      </div>

      
      <div style={{ maxWidth: '700px', margin: 'auto', padding: '1rem' }}>
        {tab === 'daily' ? (
          <Bar data={dailyData} options={chartOptions} />
        ) : (
          <Line data={weeklyData} options={chartOptions} />
        )}
      </div>
    </motion.div>
  );
}
