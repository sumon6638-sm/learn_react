## To send data in banckend && access it form UI: 
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


### // Load data from backend by using 'AXIOS'