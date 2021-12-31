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
         const col = db.collection("das");
         const das = await col.find(
            { cnpj: cnpj},
		    { projection: {
			   movimento: 1,
			   reducao: 1,
               totalSales: 1,
               totalSalesST: 1, 
			   _id: 0}
			}
            ).toArray();     
         
         res.status(200).json(das);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
