import React from 'react';

const ShowList = ({ shows }) => {
  return (
    <ul>
      {shows.map(({ show }) => (
        <li key={show.id}>{show.name}</li>
      ))}
    </ul>
  );
};

export default ShowList;
