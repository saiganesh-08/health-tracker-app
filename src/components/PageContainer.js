// src/components/PageContainer.js
import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: "20px",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "1200px",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent background
  borderRadius: "15px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(10px)",
};

export default function PageContainer({ children }) {
  return <div style={containerStyle}>{children}</div>;
}
