const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { cnpj, quizzes } = req.body;
        //const { cnpj, quizzes } = objQuizz;
        
         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("tenant");
         const p = await col.updateOne(
            //{ cnpj: cnpj },
            { cnpj: '89823918000198' },
            { 
                //$push:{ quizzes: quizzes}
                $push:{ quizzes: {id:'0', rating: 1}}
           },
                       
        );

         res.status(200).json({ msg: 'Salvo', cnpj: cnpj, quizzes: quizzes});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

