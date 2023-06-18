import React from 'react';

const Locationinfo = ({ location }) => {
  if (!location) {
    return null; // Si location es null, no renderizar nada
  }

  return (
    <article>
      <h2>{location.name}</h2>
      <ul>
        <li>
          <span>Type</span>
          <span>{location.type}</span>
        </li>
        <li>
          <span>Dimension</span>
          <span>{location.dimension}</span>
        </li>
        <li>
          <span>Population</span>
          <span>{location.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
