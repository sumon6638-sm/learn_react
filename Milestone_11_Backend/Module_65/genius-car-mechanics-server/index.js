const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yi4wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect(); // connect this with my db
        // console.log('connected to database');    // check is it properly connected with my db

        // create data base or find out it.. if it not found then it make it self
        const database = client.db('carMechanic')
        const servicesCollection = database.collection('services');

        // GET API -- get all data from my db
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services)
        });

        // GET Single Service
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            console.log('getting specific service', id);
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.json(service);
        })

        // POST API -- add data on my db by using UI
        app.post('/services', async (req, res) => {
            const service = req.body;
            console.log("hit the post api", service);

            /* const service = {
                "name": "Replace Tyre",
                "price": "700",
                "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
                "img": "https://i.ibb.co/Z2b5jL5/1.jpg"
            } */

            const result = await servicesCollection.insertOne(service);
            console.log(result);

            res.json(result)
        });

        // DELETE API
        app.delete('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.json(result);
        })

    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server'); // show in localhost: 5000
});

app.listen(port, () => {
    console.log('Running Genius Server on port: ', port); // show in terminal
})