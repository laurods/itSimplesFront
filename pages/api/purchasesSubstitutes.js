const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {

        //const { item } = req.body;
        const  item = req.body;  

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         //const p = await col.insertOne(item);
         const p = await col.updateOne(
             { cean: item.cean },
             {
                set: { 
                    cean: item.cean,
                    cest: item.cest,
        //             cfop: cfop,
        //             cnpjDestinatario: cnpjDestinatario,
        //             cnpjEmitente: cnpjEmitente,
        //             cofins: cofins,
        //             cst: cst,
        //             name: item[0].name,
        //             ncm: item[0].ncm,
        //             nf: item[0].nf, 
        //             pis: item[0].pis,
        //             vICMSST: item[0].vICMSST
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

