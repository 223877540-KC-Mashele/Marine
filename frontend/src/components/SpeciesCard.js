import React from 'react';

const SpeciesCard = ({ species }) => (
  <div className="species-card">
    <img src={species.imageUrl} alt={species.name} />
    <h3>{species.name}</h3>
    <p>{species.description}</p>
    <span className={`conservation-status status-${species.status}`}>
      {species.status.toUpperCase()}
    </span>
  </div>
);

export default SpeciesCard;
