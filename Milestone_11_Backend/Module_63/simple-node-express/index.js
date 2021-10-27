const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()) // for using cors as middleware
app.use(express.json());    // frontend theke data k stringify kore pathanu hoyeche seta k backend use korte hole json ee convert korte hbe...abr backend theke front end ee pathate stringify kore pathate hbe...

const port = process.env.PORT || 5000;

/*
// Step 4
const handler = (req, res) => {
    res.send('Hello from node');
}

app.get('/', handler); 
*/

// Updated Step 4
app.get('/', (req, res) => {
    res.send('Hello from my third node with node-mon');
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    // use search query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD (when user send data from UI)
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);

    // now eta k ui te pathanur jonno: 
    //  method 1
    // res.send(JSON.stringify(newUser)) // json file k stringify kore pathacchi

    //  method 2
    res.json(newUser);  // pura json file(json file json na) ta kei pathacchi... sekhane giye json ee convert kore use korbo
})


// dynamic api
app.get('/users/:id', (req, res) => {
    // req.params.id diye users theke id k nibo...
    const id = req.params.id;
    // users[id] er maddhome user k select korbo
    const user = users[id]
    // then browser er respone hisebe user k send korbo
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orages', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummu tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port)
})