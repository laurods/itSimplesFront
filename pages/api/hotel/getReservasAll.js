const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
         await client.connect();         
         const db = client.db(dbName);
         const dataReservas = db.collection("tenant");
          const tenantData = await dataReservas.find({ }, { reservas: 1 }).toArray();

         res.status(200).json(tenantData);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
