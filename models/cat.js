let client = require('../dbConnection');
let collection = client.db().collection('Cat');

async function insertCat(cat){
    return collection.insertOne(cat);
}

async function getAllCat(){
    return collection.find().toArray();
}

module.exports = {insertCat, getAllCat}