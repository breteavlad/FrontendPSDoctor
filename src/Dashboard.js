import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Doctor Appointment Dashboard</h1>
      <div className="dashboard-options">
        <Link to="/appointments" className="dashboard-option">
          <h2>View All Appointments</h2>
          <p>See all scheduled appointments</p>
        </Link>
        <Link to="/add-appointment" className="dashboard-option">
          <h2>Add New Appointment</h2>
          <p>Schedule a new appointment</p>
        </Link>
        
      </div>
    </div>
  );
};

export default Dashboard;
