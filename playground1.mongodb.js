const database = 'cue1';
const collectionName = 'students';

use(database);
db.createCollection(collectionName);

const collection = db.getCollection(collectionName);

const users = [
    { name: 'Jorge', edad: 49 },
    { name: 'Ana', edad: 15 },
    { name: 'Laura', edad: 41 },
    { name: 'Carlos', edad: 20 },
    { name: 'Lucas', edad: 18 }
];

collection.insertMany(users);

collection.find();

/* function insertMany() {
  
} */