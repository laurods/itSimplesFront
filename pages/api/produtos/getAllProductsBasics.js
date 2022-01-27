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
         const col = db.collection("productsBasics");
         const products = await col.find(
             { cnpj: cnpj },
             { projection: {
                cean: 1,
                cnpj: 1,
                custoUnitario: 1,
                ficha: 1,
                grupo: 1,
                nome: 1,
                preco: 1,
                _id: 1}
             }
             ).toArray(); 

         res.status(200).json(products);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
