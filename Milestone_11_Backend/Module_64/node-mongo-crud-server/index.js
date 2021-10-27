const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// user: mydbuser1  &&  sumon6638
// password: dZvakt7fmWDN9MwY   &&  xvZxPzdSEL3qcZyN

const uri = "mongodb+srv://sumon6638:xvZxPzdSEL3qcZyN@cluster0.yi4wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// new method -- method 2
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");

        // method 2 -- B -- most latest

        // GET API
        // GET ALL USERS
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })

        // GET SPECIFIC USER
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };

            const user = await usersCollection.findOne(query);

            console.log(id);
            res.send(user);
        })

        // POST api / create a document by express
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            
            console.log('got new user', req.body);
            console.log('added user', result);

            // console.log('Hitting the post', req.body);
            // res.send('hit the post');
            res.json(result);
        })

        // update or PUT
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };

            // create a document that sets the plot of the movie
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                },
            };

            const result = await usersCollection.updateOne(filter, updateDoc, options)

            console.log('updating user', req);
            res.json(result);
        })

        // DELETE API
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };

            const result = await usersCollection.deleteOne(query);

            console.log('deleting user with id', result);
            res.json(result);
        })

        /* 
        // method 2 -- A -- latest
        // create a document to insert by ready mate
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
        // await client.close();
    }
}
run().catch(console.dir);

/* 
// old method -- method 1
client.connect(err => {
    const collection = client.db("foodMaster").collection("users");
    // perform actions on the collection object
    console.log('Hitting the database');

    const user = { name: 'Opu', email: 'opu@gmail.com', phone: '01900545654' };
    collection.insertOne(user)
        .then(() => {
        console.log('insert success')
    })

    // console.error(err);

    // client.close();
}); */



app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
});

app.listen(port, () => {
    console.log("Running Server on port", port)
})