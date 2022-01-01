const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const  { values } = req.body;
        const empresa = values;

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("cnpj");
         const p = await col.updateOne(
             { control: empresa.control },
             {
                
                $set: {
                    name: empresa.name,
                    cnpj: empresa.cnpj,
                    user: empresa.user,
                    control: empresa.control,
                },				
                                   
            },
            { upsert: true }             
        );

         res.status(200).json({ msg: empresa });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

