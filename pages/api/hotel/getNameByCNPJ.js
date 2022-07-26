const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        
        const { cnpj } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const dataTenant = db.collection("cnpj");
         const tenant = await dataTenant.findOne(
            {cnpj: '89823918000199'},
            {_id: 0, name: 1}
            ).toArray();

         res.status(200).json(tenant);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
