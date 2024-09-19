const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";
const collectionName = "customers";

async function insertDocument() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to the database!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const myobj = { name: "Company Inc", address: "Highway 37" };

    const result = await collection.insertOne(myobj);
    console.log("1 document inserted");

    console.log("Insert result:", result);
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    await client.close();
  }
}

insertDocument();
