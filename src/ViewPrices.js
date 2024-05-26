import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/prices');
        setPrices(response.data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      <h2>View Prices</h2>
      <ul>
        {prices.map((price) => (
          <li key={price.id}>
            {price.service} - ${price.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPrices;
