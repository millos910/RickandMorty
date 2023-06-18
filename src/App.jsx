import { useEffect } from 'react';
import './App.css';
import getramdomnumber from './assets/utils/getramdomnumber';
import useFetch from './assets/hooks/useFetch';
import Locationinfo from './assets/components/Locationinfo';
import ResidentCard from './assets/components/ResidentCard';

function App() {
  const randomId = getramdomnumber(126);
  const url = `https://rickandmortyapi.com/api/location/${randomId}`;
  const [location, getApiLocation] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, []);

  console.log(location);

  return (
    <>
      <div className='app'>
        <h1>Entregable Rick and Morty</h1>
        <Locationinfo location={location} />
        <div className='residents-container'>
          {location?.residents ? (
            location.residents.map((url) => (
              <ResidentCard url={url} key={url} />
            ))
          ) : (
            <p>Loading residents...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
