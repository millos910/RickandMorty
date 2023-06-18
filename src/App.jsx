import { useEffect, useState } from 'react'
import './App.css'
import getramdomnumber from './assets/utils/getramdomnumber'
import useFetch from './assets/hooks/useFetch'
import Locationinfo from './assets/components/Locationinfo'
function App() {
  const randomId=getramdomnumber(126)
  const url=`https://rickandmortyapi.com/api/location/${randomId}`
  const[location,getApiLocation]=useFetch(url)
  useEffect(()=>{
    getApiLocation()
  },[])
  console.log(location);
  return (
    <>
      <div className='app'>
        <h1>etregable Rick and morti</h1>
        <Locationinfo location={location}/> 



      </div>
    </>
  )
}

export default App
