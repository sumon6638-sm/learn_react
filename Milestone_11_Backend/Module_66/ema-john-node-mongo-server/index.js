const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
var admin = require("firebase-admin");
// const { initializeApp } = require('firebase-admin/app');

const app = express();
const port = process.env.PORT || 5000;

// firebase admin initialization
var serviceAccount = require('./ema-john-c31d4-firebase-adminsdk-ndw8z-ad016e9686.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


// middleware
app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yi4wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// console.log(uri);

async function verifyToken(req, res, next) {
    if (req.headers?.authorization?.startsWith('Bearer ')) {
        const idToken = req.headers.authorization.split('Bearer ')[1];
        try {
            const decodedUser = await admin.auth().verifyIdToken(idToken);
            // console.log('email:', decodedUser.email);
            req.decodedUserEmail = decodedUser.email;
        }
        catch {
            
        }
    }
    next();
}

async function run() {
    try {
        await client.connect();
        // console.log('Database connected successfully');

        const database = client.db('online_shop');
        const productCollection = database.collection('products');
        const orderCollection = database.collection('orders');

        // GET Products API
        app.get('/products', async (req, res) => {
            console.log(req.query);
            const cursor = productCollection.find({});
            const page = req.query.page;
            const size = parseInt(req.query.size);
            let products;
            const count = await cursor.count();

            if (page) {
                products = await cursor.skip(page * size).limit(size).toArray();
            }
            else {
                products = await cursor.toArray();
            }
            // const products = await cursor.toArray();
            // const count = await cursor.count();
            
            res.send({
                count,
                products
            });
        })

        // Use POST to get data by keys
        app.post('/products/byKeys', async (req, res) => {
            // console.log(req.body);

            const keys = req.body;
            const query = { key: { $in: keys } }
            const products = await productCollection.find(query).toArray();
            res.json(products)
        })

        // Add Orders API
        app.get('/orders', verifyToken, async (req, res) => {
            
            // after get verifyToken
            const email = req.query.email;
            if (req.decodedUserEmail === email) {
                const query = { email: email };
                const cursor = orderCollection.find(query);
                const orders = await cursor.toArray();
                res.json(orders);
            }
            else {
                res.status(401).json({message: "User not authorized"})
            }

            /* let query = {};
            const email = req.query.email;
            if (email) {
                query = { email: email };
            }
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.json(orders); */
        })

        app.post('/orders', async (req, res) => {
            const order = req.body;
            order.createdAt = new Date();
            // console.log('order', order);
            const result = await orderCollection.insertOne(order);
            res.json(result);
        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Ema john server is running');
})

app.listen(port, () => {
    console.log('Server running at port ', port);
})