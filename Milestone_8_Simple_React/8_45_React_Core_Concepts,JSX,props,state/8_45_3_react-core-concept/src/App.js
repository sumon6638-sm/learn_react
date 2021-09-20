import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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

  const batteryIncrease = () => {
    if (percentage < 100) {
      setPercentage(percentage + 5)
    }
  };
  const batteryDecrease = () => {
    if (percentage > 0) {
      setPercentage(percentage - 10)
    }
  };

  return (
    <div className='mobile'>
      <h1>Mobile Battery Percentage: {percentage}</h1>
      <button onClick ={batteryDecrease}>Battery Decrease</button>
      <button onClick={batteryIncrease}>Battery Increase</button>
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
