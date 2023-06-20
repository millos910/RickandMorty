import { useEffect, useState } from 'react';
import './App.css';
import getramdomnumber from './assets/utils/getramdomnumber';
import useFetch from './assets/hooks/useFetch';
import Locationinfo from './assets/components/Locationinfo';
import ResidentCard from './assets/components/ResidentCard';
import InputSerch from './assets/components/InputSerch';
import 'boxicons/css/boxicons.min.css'; 
function App() {
  const randomId = getramdomnumber(126);
  const [idlocation,setIdlocation]=useState(randomId)
  const url = `https://rickandmortyapi.com/api/location/${idlocation}`;
  const [location, getApiLocation,haserror] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, [idlocation]);

  if (!location) {
    return <p>Loading location...</p>;
  }

  return (
      <div className='app'>
        <h1>Entregable Rick and Morty</h1>
        <InputSerch setIdlocation={setIdlocation}/>
        {
          haserror 
          ? <h2>Hey you must provide an id from 1 to 126 😱</h2>
          : (<>
            <Locationinfo location={location} />
            <div className='residents-container'>
              {location.residents ? (
                location.residents.map((url) => (
                  <ResidentCard url={url} key={url} />
                ))
              ) : (
                <i class='bx bxs-hourglass-bottom'></i>
              )}
            </div>
            </>
            )
        }
      </div>
  );
}

export default App;
