import React from 'react'

const Locationinfo = ({location}) => {
    console.log(location);

  return (
    <article>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Type</span><span>{location?.type}</span></li>
            <li><span>Dimesion</span>{location?.dimesion}<span></span></li>
            <li><span>Population</span><span>{location?.residents.length}</span></li> 
        </ul>
    </article>
  )
}

export default Locationinfo