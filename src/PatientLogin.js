import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PatientLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients: ', error);
        setError('Failed to load patients. Please try again later.');
      }
    };
    fetchPatients();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidPatient = patients.some(
      (patient) => patient.username === username && patient.password === password
    );

    if (isValidPatient) {
      console.log('Login successful');
      navigate(`/patient-dashboard?username=${username}`);
    } else {
      console.log('Login not successful');
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Not a patient? <Link to="/login/doctor">Login as Doctor</Link></p>
    </div>
  );
};

export default PatientLogin;
