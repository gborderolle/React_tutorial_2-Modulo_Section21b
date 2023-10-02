import { useParams } from 'react-router-dom';
import React from 'react';

const EventDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetail</h1>
      <p>Evento ID: {params.eventId}</p>
    </>
  );
};

export default EventDetail;
