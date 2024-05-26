import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h2>Welcome to the Doctor Appointment App</h2>
      <div>
        <h3>Login as Patient:</h3>
        <Link to="/login/patient" className="login-link">
          Patient
        </Link>
      </div>
      <div>
        <h3>Login as Doctor:</h3>
        <Link to="/login/doctor" className="login-link">
          Doctor
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
