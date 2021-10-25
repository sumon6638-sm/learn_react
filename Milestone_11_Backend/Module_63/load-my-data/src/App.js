import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // new method to get value from search box
  const nameRef = useRef(); // here 'useRef' is a hook of react
  const emailRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = e => {
    // get search value
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name: name, email: email }
    // const newUser = { name, email } // we can use this shortcut if the property name of backend and the varible of this file are same...

    // send data(search value)  to server site
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser) // string kore pathabo. oikhane parse kore use korbo thik same vabe oikhan theke ooo string kore ekhane pathabo. ekhane parse kore use korbo.
    })
      // get data from backend(by my search) and added in UI
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const addedUser = data;
        const newUsers = [...users, addedUser];
        setUsers(newUsers);
      });
    
    nameRef.current.value = '';
    emailRef.current.value = '';

    e.preventDefault();
  }
  
  return (
    <div className="App">
      <h2>Found Users: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} name="" id=" " placeholder='Name' />
        <input type="email" ref={emailRef} name="" id=" " placeholder='Email'/>
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {
          users.map(user => <li key={user.id}>{user.id}: {user.name} {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
