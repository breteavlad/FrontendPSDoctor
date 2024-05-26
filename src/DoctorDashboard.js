import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentAppointments from './CurrentAppointments';
import AppointmentHistory from './AppointmentHistory';
import PatientDetails from './PatientDetails';
import ManageAvailability from './ManageAvailability';
import ProfileSettings from './ProfileSettings';

const DoctorDashboard = () => {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="current-appointments">Current Appointments</Link>
          </li>
          <li>
            <Link to="appointment-history">Appointment History</Link>
          </li>
          <li>
            <Link to="patient-details">Patient Details</Link>
          </li>
          <li>
            <Link to="manage-availability">Manage Availability</Link>
          </li>
          <li>
            <Link to="profile-settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="current-appointments" element={<CurrentAppointments />} /> */}
        {/* <Route path="appointment-history" element={<AppointmentHistory />} />
        <Route path="patient-details" element={<PatientDetails />} />
        <Route path="manage-availability" element={<ManageAvailability />} />
        <Route path="profile-settings" element={<ProfileSettings />} /> */}
      </Routes>
    </div>
  );
};

export default DoctorDashboard;
