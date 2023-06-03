import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowDetails;
