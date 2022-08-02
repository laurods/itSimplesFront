const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const objQuizz = req.body;
        const { idHotel, quizzes } = objQuizz;
        
         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("tenant");
         const p = await col.updateOne(
            { idHotel },
            { 
                $push:{ quizzes: quizzes}
           },
                       
        );

         res.status(200).json({ msg: 'Salvo'});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

