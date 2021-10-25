import './App.css';
import DIrection from './components/DIrection';
import Map from './components/Map';
import { useRef, useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const[destination, setDestination] = useState('');
  const originRef = useRef('');
  const destinationRef = useRef('');

  const handleDirection = e => {
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" name="" id="" placeholder='state from' />
        <br />

        <input type="text" name="" id="" placeholder='destination' />
        <br />

        <input type="submit" value="Get Direction" />
      </form>
      {/* <Map></Map> */}

      <DIrection origin={origin} destination={destination}></DIrection>
    </div>
  );
}

export default App;
