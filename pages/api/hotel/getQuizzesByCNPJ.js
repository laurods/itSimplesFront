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
         const dataQuizzes = db.collection("tenant");
          const tenantData = dataQuizzes.aggregate(
                { $match : { cnpj } },
         );
        
        //  const tenantData = await dataQuizzes.aggregate(
        //     [
        //         { $match : { cnpj } },
               
                
        //     ]

        //  ).toArray();
         
         

         res.status(200).json(tenantData);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
