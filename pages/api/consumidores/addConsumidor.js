const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const  { dataPedido } = req.body;
        const { 
            telefone,
            nome,
            rua,
            numero,
            complemento,
            bairro,
            txEntrega,
        } = dataPedido;            

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("consumidores");
         const p = await col.insertOne({
            telefone,
            nome,
            rua,
            numero,
            complemento,
            bairro,
            txEntrega,
            pedido: [dataPedido]
         });

         res.status(200).json({ msg: 'salvo' });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

