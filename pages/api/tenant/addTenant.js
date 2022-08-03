const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const objTenant = req.body;
        const { cnpj, name, contato, user } = objTenant;
        
         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("tenant");
         const p = await col.insertOne(            
            {                
                cnpj,
                name,
                contato,
                users: [user],
                quizzes: [],
                suggests: [],
                reservas: [],
                payment: [],                  
           },
                  
        );

         res.status(200).json({ msg: `${name}. Salvo com sucesso!`});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

