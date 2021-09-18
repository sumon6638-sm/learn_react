import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Koober', 'Bappy', 'Shuvo']

  const cinemas = [
    {movie: 'Padma N M', nayok: 'Koober', nayika: 'Kopila'},
    {movie: 'Ami asi Tumi nai', nayok: 'Rubel', nayika: 'Moushumi'},
    {movie: 'Baba Keno Cakor', nayok: 'Razzak', nayika: 'Kobori'},
    {movie: 'Na na na', nayok: 'Joshim', nayika: 'Shabana'},
  ]

  return (
    <div className="App">
      <ul>
        {
          // nayoks.map(nayok => console.log(nayok))
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      
      {
        cinemas.map(cinema => <Cinema nayok = {cinema.nayok} nayika = {cinema.nayika} movie = {cinema.movie}></Cinema>)
      }
    </div>
  );
}


function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'yellow',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'

  }
  return (
/*   
    // Style from css file
    <div className='person'>
      <h1>Name: Sakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
 */
    

    // Style from object
    <div style = {person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div>


    /*
    // Style Put Dynamically
    <div style = {{backgroundColor: 'green', border: '3px solid red', margin: '20px', borderRadius: '10px'}}>
      <h1>Name: Sakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
    */
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className='person'>
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}

function Cinema(props) {
  return (
    <div className='cinemaHolder'>
      <h2>Movie: {props.movie}</h2>
      <h4>Nayok: {props.nayok}</h4>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

export default App;


/*
      <Person name='Rubel' nayika='Moushumi'></Person>
      <Person name='BappaRaz' nayika='Cheka'></Person>
      <Person name='Koober' nayika=''></Person>
      <Person name='' nayika='Kopila'></Person>
*/


/*
      <Friend></Friend>
      <Friend phone= '01796' address='Noakhali'></Friend>
      <Friend phone= '0198527' address='Rongpur'></Friend>
      <Friend address='Jessore'></Friend>
*/


/* 
const nayoks = ['Rubel', 'BappaRaz', 'Koober', 'Bappy', 'Shuvo']

return(
  <ul>
        {
          // nayoks.map(nayok => console.log(nayok))
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>

      <Person name={nayoks[0]} nayika='Moushumi'></Person>
      <Person name={nayoks[1]} nayika='Cheka'></Person>
      <Person name={nayoks[2]} nayika=''></Person>
      <Person name='' nayika='Kopila'></Person>

)
*/
