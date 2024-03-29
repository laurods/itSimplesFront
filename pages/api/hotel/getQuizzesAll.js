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
         const tenants = db.collection("tenant");
          const tenantData = await tenants.find({ }, { projection: { 
            _id: 0,
            cnpj: 1,
            name: 1,
            quizzes: 1,
            suggests: 1,
        } }).toArray();

         res.status(200).json(tenantData);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
