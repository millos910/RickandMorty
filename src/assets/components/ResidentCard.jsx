import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentcard.css'
const ResidentCard = ({url}) => {
    const [resident, getResident]=useFetch(url)
    useEffect(()=>{
        getResident()
    },[])
    console.log(resident);
  return (
    <>
    <article className='resident'>
        <header className='resident-header'>
            <img className='resident-img' 
            src={resident?.image} alt="residentes " />
            <div className='resident-status'>
                <span className={`resident-circle ${resident?.status}`}></span>
                <span className='resident-statud-value'>{resident?.status}</span>
            </div>
        </header>
        <section className='resident-body'>
            <h3 className='resident-name'>{resident?.name}</h3>
            <hr className='resident-hr'/>
            <ul className='resident-list'>
                <li className='resident-item'><span className='resident-label'>  Specie: </span><br /><span className='resident-value'>{resident?.species}</span></li>
                <li className='resident-item'><span className='resident-label'>  Origin: </span><br /><span className='resident-value'>{resident?.origin?.name}</span></li>
                <li className='resident-item'><span className='resident-label'>  Episodes: </span><br /><span className='resident-value'>{resident?.episode?.length}</span></li>
            </ul>
        </section>
    </article>
    </>
  )
}

export default ResidentCard