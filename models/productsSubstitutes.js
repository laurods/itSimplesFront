const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;

 const addProducts = async (dataProducts) => {
    try {        
        console.log('aki 1');
        console.log(dataProducts)        
         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         await col.insertMany(dataProducts);
         

        } catch (err) {
         console.log('erro');
     }
 
     finally {
        await client.close();
    }
  
    
  };
  
  module.exports = {
    addProducts
  };


