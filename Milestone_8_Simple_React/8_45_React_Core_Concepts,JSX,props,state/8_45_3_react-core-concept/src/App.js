import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Laptop', price: 150000, color: 'black', brand: 'Dell' },

    { name: 'Mobile', price: 10000, color: 'black', brand: 'Samsung' },

    { name: 'Camera', price: 55000, color: 'black', brand: 'Canon' },

    { name: 'Iphone 8plus', price: 45000, color: 'mateBlack', brand: 'Iphone' }
  ]
  return (
    <div className="App">
      <Mobile></Mobile>
      <ExternalUsers></ExternalUsers>
      <Friend name='Sumon' mail='mdsumoncse19@gmail.com'></Friend>
      <Friend name='anik' mail='mdsumoncse19@gmail.com'></Friend>
      <Friend name='rabbul' mail='mdsumoncse19@gmail.com'></Friend>
      <Friend name='Cango' mail='mdsumoncse19@gmail.com'></Friend>
      {
        // products.map(product => Product(product))
        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
      }
    </div>
  );
}

function Mobile() {
  const [percentage, setPercentage] = useState(0);
  const [second, setSecond] = useState(1);

  const batteryIncrease = () => {
    if (percentage < 100) {
      setPercentage(percentage + 5)
      setSecond(second*2)
    }
  };
  const batteryDecrease = () => {
    if (percentage > 0) {
      setPercentage(percentage - 10)
      setSecond(second*10)
    }
  };

  return (
    <div className='mobile'>
      <h1>Mobile Battery Percentage: {percentage}</h1>
      <h3>Charging Time: {second}second</h3>
      <button onClick ={batteryDecrease}>Battery Decrease</button>
      <button onClick={batteryIncrease}>Battery Increase</button>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>External Users: {users.length}</h3>

      {
        users.map(user => <User id={user.id} title={user.title} userId={user.userId} completed={user.completed}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h3>{props.id}: {props.title.slice(0,20)}</h3>
      <h4>Catagory: {props.userId}, isCompleted: {props.completed}</h4>
    </div>
  )
}

function Friend(props) {
  const friendStyle = {
    backgroundColor: 'lightgreen',
    border: '5px solid yellow',
    borderRadius: '10px'
  }
  return (
    <div className='friend' style={friendStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.mail}</h4>
    </div>
  )
}

function Product(props) {
  return (
    <div style={{ backgroundColor: 'green', border: '5px solid red',borderRadius: '10px', margin: '10px', padding: '10px'}}>
      <h2>Product name: {props.name}</h2>
      <h3>Product price: {props.price}</h3>
      <h4>Product color: {props.color}</h4>
    </div>
  )
}

export default App;
