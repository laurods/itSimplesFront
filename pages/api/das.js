const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const  { dataDAS } = req.body;
        const movimento = dataDAS;

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("das");
         const p = await col.updateOne(
             { control: movimento.control },
             {
                
                $set: {
                    movimento: movimento.movimento,
                    cnpj: movimento.cnpj,
                    totalSales: movimento.totalSales,
                    totalSalesST: movimento.totalSalesST,
                    DASsemDeducoes:movimento.DASsemDeducoes,
                    DAScomDeducoes: movimento.DAScomDeducoes,
                    reducao: movimento.reducao,
                    ICMSindevidoReferenteProdutosST: movimento.ICMSindevidoReferenteProdutosST,
                    COFINSindevidaReferenteProdutosMonofasicos : movimento.COFINSindevidaReferenteProdutosMonofasicos,
                    PISindevidoReferenteProdutosMonofasicos: movimento.PISindevidoReferenteProdutosMonofasicos,
                    control: movimento.control,
                },				
                                   
            },
            { upsert: true }             
        );

         res.status(200).json({ msg: movimento });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

