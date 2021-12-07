const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {

        const { item } = req.body; 

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         const p = await col.insertOne(item);
         
    //      filterProductdSubstitutes.forEach(e => {
    //         const p = col.updateOne(
    //             { cean: e.cean },
    //                 {
    //                    $set: { 
    //                      cean: e.cean,
    //                     //  cest: e.cest,
    //                     //  cfop: e.cfop,
    //                     //  cnpjDestinatario: e.cnpjDestinatario,
    //                     //  cnpjEmitente: e.cnpjEmitente,
    //                     //  cofins: e.cofins,
    //                     //  cst: e.cst,
    //                     //  name: e.name,
    //                     //  ncm: e.ncm,
    //                     //  nf: e.nf, 
    //                     //  pis: e.pis,
    //                     //  vICMSST: e.vICMSST
                        
    //                     },				
                       
    //                 },
    //                 { upsert: true }
               
    //        )  
    //    });

         
         res.status(200).json({ msg: 'success' });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

