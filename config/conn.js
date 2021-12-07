const { MongoClient } = require("mongodb");
// import { MongoClient } from 'mongodb'

//let uri = 'mongodb+srv://dosimples:it23102021@cluster0.7cclw.mongodb.net/itsimples?retryWrites=true&w=majority'
//let dbName = 'itsimples'
// Replace the following with your Atlas connection string                                                                                                                                        
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}