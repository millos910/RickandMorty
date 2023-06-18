import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const ResidentCard = ({ url }) => {
  const [resident, getApiResident] = useFetch(url);

  useEffect(() => {
    getApiResident();
  }, []);

  console.log(resident);

  if (!resident) {
    return null; // Si resident es null, no renderizar nada
  }

  return (
    <article>
      <header className='car-character'>
        <img src={resident.image} alt='character' />
        <div>
          <span>{resident.status}</span>
        </div>
      </header>
      <section>
        <h3>{resident.name}</h3>
        <hr />
        <ul>
          <li>
            <span>Species</span>
            <span>{resident.species}</span>
          </li>
          <li>
            <span>Origin</span>
            <span>{resident?.origin.name}</span>
          </li>
          <li>
            <span>Episodes</span>
            <span>{resident.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
