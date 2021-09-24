import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    {name: 'Samll Giants', author: 'bo'},
    {name: 'Build to sell', author: 'john'},
    {name: 'Grind id', author: 'Ray'},
    {name: 'Shoe Dog', author: 'bo'}
  ]
  const handleIncreaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    console.log(steps);
  }
  useEffect(() => {
    console.log(steps);
  }, [steps])

  return (
    <div className="App">
      <h3 title = 'My awesome tooltip'>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13500" />
      <Books books={books}/>
    </div>
  );
}

export default App;
