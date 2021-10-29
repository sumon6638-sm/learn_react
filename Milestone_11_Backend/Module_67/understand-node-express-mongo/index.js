const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express()
const port = 7000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yi4wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('database connected');
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})






/* const os = require('os');
const fs = require('fs');

// console.log('os version: ', os.version());
// console.log('os', os.arch());

// fs.writeFileSync('hello.txt', 'I am writing from Node');

// fs.appendFileSync('hello.txt', '\nMore text by appendFileSync');

const content = fs.readFileSync('hello.txt');
console.log(content.toString());

console.log("Running Node"); */