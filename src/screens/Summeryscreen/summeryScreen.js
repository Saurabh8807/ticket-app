import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TicketForm from '../../components/Ticketform/ticketform';
import './summeryscreen.css';

const SummaryScreen = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    };

    fetchData();
  }, [showId]);

  if (!show) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="containersum">
      <h1 className="titlesum">{show.name}</h1>
      <p className="summary">{show.summary}</p>
      <div className="ticket-form">
        <TicketForm show={show} />
      </div>
    </div>
  );
};

export default SummaryScreen;
