import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PatientLogin from './PatientLogin';
import DoctorLogin from './DoctorLogin';
import Appointments from './Appointments';
import AddAppointment from './AddAppointment';
import PatientDashboard from './PatientDashboard';
import DoctorDashboard from './DoctorDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>Doctor Appointment App</h1>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/patient" element={<PatientLogin />} />
          <Route path="/login/doctor" element={<DoctorLogin />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/patient-dashboard/*" element={<PatientDashboard />} />
          <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
