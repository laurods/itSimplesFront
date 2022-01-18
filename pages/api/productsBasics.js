const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        //const { item } = req.body;
        const  { item } = req.body;
        const product = item;

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("productsBasics");
         //const p = await col.insertOne(item);
         const p = await col.updateOne(
             { codigo: product.codigo },
             {
                
                $set: {
                    codigo: product.codigo,
                    cean: product.cean,
                    grupo: product.grupo,
                    nome: product.nome,
                    preco: product.preco,
                    custoUnitario: product.custoUnitario,
                    ficha: product.ficha,
                    cnpj:product.cnpj
                },				
                                   
            },
            { upsert: true }             
        );

         res.status(200).json({ msg: item });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

