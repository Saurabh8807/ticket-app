import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './homescreen.css';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="background"></div>
      <h1>TV Shows</h1>
      {shows.map(({ show }) => (
        <div className="show-box" key={show.id}>
          <Link to={`/summary/${show.id}`} className="show-box-link">{show.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
