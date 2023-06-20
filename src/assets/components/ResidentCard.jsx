import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({url}) => {
    const [resident, getResident]=useFetch(url)
    useEffect(()=>{
        getResident()
    },[])
    console.log(resident);
  return (
    <>
    <div>ResidentCard</div>
    <article>
        <header>
            <img src={resident?.image} alt="residentes " />
            <div>
                <span></span>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li><span>specie</span><span>{resident?.species}</span></li>
                <li><span>origen</span><span>{resident?.origin?.name}</span></li>
                <li><span>episodios</span><span>{resident?.episode?.length}</span></li>
            </ul>
        </section>
    </article>
    </>
  )
}

export default ResidentCard