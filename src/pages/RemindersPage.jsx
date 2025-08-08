import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RemindersPage() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [ampm, setAmPm] = useState('AM'); 
  const [reminders, setReminders] = useState([]);
  const [alarmSound, setAlarmSound] = useState(null);

  // Load reminders from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('reminders');
    if (saved) {
      setReminders(JSON.parse(saved));
    }
  }, []);

  // Save reminders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  // Emoji detection
  const getEmoji = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('water') || lower.includes('drink')) return '💧';
    if (lower.includes('food') || lower.includes('meal') || lower.includes('eat')) return '🍽️';
    if (lower.includes('sleep') || lower.includes('nap')) return '😴';
    if (lower.includes('exercise') || lower.includes('workout') || lower.includes('gym')) return '🏋️';
    if (lower.includes('yoga') || lower.includes('meditate') || lower.includes('meditation')) return '🧘';
    if (lower.includes('run') || lower.includes('jog')) return '🏃';
    if (lower.includes('walk')) return '🚶';
    if (lower.includes('study') || lower.includes('read')) return '📚';
    return '🔔';
  };

  const addReminder = () => {
    if (!task || !time) return;
    const emoji = getEmoji(task);

    // Load alarm sound with a user action so it won't be blocked
    if (!alarmSound) {
      const sound = new Audio("generic-alarm-clock-86759.mp3");
      setAlarmSound(sound);
    }

    setReminders([
      ...reminders,
      { task, time, ampm, emoji, triggered: false }
    ]);
    setTask('');
    setTime('');
    setAmPm('AM');
  };

  // Check reminders every second
  useEffect(() => {
    const checkReminders = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const currentAmPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; 
      const currentTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;

      setReminders(prev =>
        prev.map(rem => {
          if (
            rem.time === currentTime &&
            rem.ampm === currentAmPm &&
            !rem.triggered
          ) {
            if (alarmSound) {
              alarmSound.currentTime = 0;
              alarmSound.play().catch(err => {
                console.warn("Audio play blocked:", err);
              });
            }
            alert(`⏰ Reminder: ${rem.emoji} ${rem.task}`);
            return { ...rem, triggered: true };
          }
          return rem;
        })
      );
    }, 1000);

    return () => clearInterval(checkReminders);
  }, [alarmSound]);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>🧠 Reminders</h1>

      <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '200px'
          }}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc'
          }}
        />

        <select
          value={ampm}
          onChange={(e) => setAmPm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc'
          }}
        >
          <option>AM</option>
          <option>PM</option>
        </select>

        <button
          onClick={addReminder}
          style={{
            padding: '10px 15px',
            backgroundColor: '#00d40bff',
            border: 'none',
            color: 'white',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 0 10px #a5d6a7'
          }}
        >
          Add
        </button>
      </div>

      <h2>Recent Reminders</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reminders.map((rem, index) => (
          <motion.li
            key={index}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            style={{
              background: '#e8f5e9',
              width: '50%',
              marginBottom: '10px',
              padding: '10px 15px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 0 8px #c8e6c9'
            }}
          >
            <span>{rem.emoji} {rem.task}</span>
            <span>{rem.time} {rem.ampm}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
