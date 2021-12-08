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
         //const p = await col.insertOne(item);
         const p = await col.updateOne(
             { cean: item[0].cean },
             {
                set: { 
                    cean: item[0].cean,
                    cest: item[0].cest,
                    cfop: item[0].cfop,
                    cnpjDestinatario: item[0].cnpjDestinatario,
                    cnpjEmitente: item[0].cnpjEmitente,
                    cofins: item[0].cofins,
                    cst: item[0].cst,
                    name: item[0].name,
                    ncm: item[0].ncm,
                    nf: item[0].nf, 
                    pis: item[0].pis,
                    vICMSST: item[0].vICMSST
                },				
                                   
            },
            { upsert: true }             
        );
         
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

