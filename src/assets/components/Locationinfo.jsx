import React from 'react'
import './styles/locationCard.css'
const Locationinfo = ({ location }) => {
    if (!location) {
        return null; // Si location es null, no renderizar nada
    }
    console.log(location);
return (
    <div className='container-location'>
    <article className='card-location'>
    <h2 className='locatio-name'>{location.name}</h2>
    <ul className='location-list'>
        <li className='location-value'>
        <span className='location-name-value'>Type</span><br />
        <span className='location-name-asigment'>{location.type}</span>
        </li>
        <li className='location-value'>
            <span className='location-name-value'>Dimension</span><br />
            <span className='location-name-asigment'>{location.dimension}</span>
        </li>
        <li>
            <span className='location-value'>Population</span><br />
            <span className='location-name-asigment'> {location.residents?.length || 0}</span>
        </li>
    </ul>
    </article>
    </div>
);
};

export default Locationinfo;
