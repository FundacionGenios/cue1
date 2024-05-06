const database = 'cue1';
const collectionName = 'students';

use(database);

db.createCollection(collectionName);

const collection = db.getCollection(collectionName);

const user = { name: 'Juan', edad: 23 };

collection.insertOne(user);

collection.find();