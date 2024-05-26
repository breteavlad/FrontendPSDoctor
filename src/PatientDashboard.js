import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AvailableDoctors from './AvailableDoctors.js';
import BookAppointment from './BookAppointment';
import ViewPrices from './ViewPrices';

const PatientDashboard = () => {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="available-doctors">Available Doctors</Link>
          </li>
          <li>
            <Link to="book-appointment">Book Appointment</Link>
          </li>
          <li>
            <Link to="view-prices">View Prices</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="available-doctors" element={<AvailableDoctors />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="view-prices" element={<ViewPrices />} />
        <Route path="/patient-dashboard/*" element={<PatientDashboard />} />
      </Routes>
    </div>
  );
};

export default PatientDashboard;
