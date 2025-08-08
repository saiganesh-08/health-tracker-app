import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: '🥗 Food' },
  { path: '/water', label: '💧 Water' },
  { path: '/exercise', label: '🏃 Exercise' },
  { path: '/reminders', label: '⏰ Reminders' },
  { path: '/progress', label: '📊 Progress' },
  { path: '/summary', label: '🌿 Summary' },
];

export default function NavigationBar() {
  return (
    <nav style={navStyle}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            ...linkStyle,
            backgroundColor: isActive ? '#c8e6c9' : 'transparent',
            color: isActive ? '#2e7d32' : '#33691e',
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#e8f5e9',
  padding: '1rem',
  borderBottom: '2px solid #a5d6a7',
  borderRadius: '0 0 12px 12px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
};
