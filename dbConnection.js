const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Zeba:zYvsec-5cobjy-magqej@zeba.c9uuklt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;