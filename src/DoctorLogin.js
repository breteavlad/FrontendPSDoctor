import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctors'); // Adjust the URL as needed
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setError('Failed to load doctors. Please try again later.');
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidDoctor = doctors.some(
      (doctor) => doctor.username === username && doctor.password === password
    );

    if (isValidDoctor) {
      console.log('Login successful');
      navigate(`/doctor-dashboard?username=${username}`);
    } else {
      console.log('Login not successful');
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>
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
      <p>Not a doctor? <Link to="/login/patient">Login as Patient</Link></p>
    </div>
  );
};

export default DoctorLogin;
