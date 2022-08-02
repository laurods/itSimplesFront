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
         const dataQuizzes = db.collection("tenant");
         const quizzes = await dataQuizzes.aggregate(
            [
                { $match : { cnpj } },
                {
                    $project : {
                        cnpj : 1, contato : 1, name: 1, quizzes: 1, 
                        answerYesCount : {
                           $filter : {
                              input : '$quizzes',
                              as : 'quizz',
                              cond : {
                                 $and : [
                                    { $eq : [ "$$quizz.answer", "Sim" ] }
                                 ]
                              }
                           }
                        }
                    }
                 }
                
        ]

         ).toArray();
         
         

         res.status(200).json(quizzes);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
