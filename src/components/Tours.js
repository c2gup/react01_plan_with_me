import React from 'react';
import Card from './Card';

export default function Tours({ tours ,removeTour }) {
  // Check if tours is not an array, return an empty div
  if (!Array.isArray(tours)) {
    return <div>No tours available</div>;
  }

  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan Your Tour</h2>
      </div>

      <div className='cards'>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

