import { useParams } from 'react-router-dom';
import React from 'react';
import EventItem from '../components/EventItem';

const EventDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetail</h1>
      <p>Evento ID: {params.eventId}</p>

      {/* <EventItem event={} /> */}
    </>
  );
};

export default EventDetail;
