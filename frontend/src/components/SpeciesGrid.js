import React from 'react';
import SpeciesCard from './SpeciesCard';
import marineSpecies from './SpeciesData'; 

const SpeciesGrid = () => (
  <div className="species-grid">
    {marineSpecies.map((species, index) => (
      <SpeciesCard key={index} species={species} />
    ))}
  </div>
);

export default SpeciesGrid;
