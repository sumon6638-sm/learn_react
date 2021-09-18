import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])

  return (
    <div>
      <h3>External Users</h3>
      <p>{users.length}</p>
      {
        // users.map(user => <li>{user.name}</li>)
        users.map(user => <User name = {user.name} email = {user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}

// Interface for count
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // setCount(count+1);
    const newCount = count +1
    setCount(newCount);
  };

  const handleDecrease = () => { setCount(count - 1) };
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}


// Interface for Product
function Product(props) {
  
  const productStyle = {
    backgroundColor: 'green',
    color : 'black',
  }
  
  return (
    <div className='product' style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Brand: {props.brand}</h3>
    </div>
  )
}

export default App;


/* 
const products = [
    { name:'Laptop', price:150000, color:'black', brand:'Dell' },

    { name:'Mobile', price:10000, color:'black', brand:'Samsung' },

    { name: 'Camera', price: 55000, color: 'black', brand: 'Canon' },

    { name:'Iphone 8plus', price:45000, color:'mateBlack', brand:'Iphone' }
  ]
*/


/* 
{/* Process 2: Add data dynamically by map 
{
  products.map(product => <Product name={product.name} price={product.price} color={product.color} brand={product.brand}></Product>)
}


{/* Process 1: Add data manually
{/* <Product name='Laptop' price='150000' color='black' brand='Dell'></Product>

      <Product name='Mobile' price='10000' color='blue' brand='Samsung'></Product>

      <Product name='Camera' price='550000' color='black' brand='Canon'></Product>
*/