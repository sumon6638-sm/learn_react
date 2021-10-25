const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// user: mydbuser1
// password: dZvakt7fmWDN9MwY

const uri = "mongodb+srv://mydbuser1:dZvakt7fmWDN9MwY@cluster0.yi4wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// new method
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");

        // POST api by express
        app.post('/users', async (req, res) => {
            console.log('Hitting the post', req.body);
            res.send('hit the post');
        })

        /* 
        // create a document to insert by readymat
        const doc = {
            name: "Super",
            email: "superhot@hotmail.com",
            phone: '01906478525',
            address: 'Mia Khan Nagar',
        }
        const result = await usersCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        console.log(result); */
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

/* 
// old method
client.connect(err => {
    const collection = client.db("foodMaster").collection("users");
    // perform actions on the collection object
    console.log('Hitting the database');

    const user = { name: 'Opu', email: 'opu@gmail.com', phone: '01900545654' };
    collection.insertOne(user)
        .then(() => {
        console.log('insert success')
    })

    // console.log(err);

    // client.close();
}); */



app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
});

app.listen(port, () => {
    console.log("Running Server on port", port)
})