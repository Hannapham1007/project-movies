import React from "react";
import "../styles/Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
        
      <div className="loading-center">
        <h2 className="loading-title">Loading...Please Wait</h2>
        <div className="loading-spin"></div>
      
      </div>
    </div>
  );
}