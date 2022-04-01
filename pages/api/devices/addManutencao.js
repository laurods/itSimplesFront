const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const  { 
            dia, 
            serial,
            filial,
            observacao,
            status,
            documento,
            valor,
            cnpj, 
        } = req.body;

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("manutencao");
         const p = await col.insertOne(
             { 
                dia, 
                serial,
                filial,
                observacao,
                status,
                documento,
                valor,
                cnpj, 
            },
                        
        );

         res.status(200).json({ msg: 'Salvo' });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

