const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";

async function createDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to the database!");
    
    const db = client.db(dbName);
    console.log("Database created!");

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

createDatabase();