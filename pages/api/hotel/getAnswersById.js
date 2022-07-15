const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        
        const { id } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const dataQuizzes = db.collection("answers");
         const quizzes = await dataQuizzes.aggregate(
            [
                { $match : { idHotel : '1'} },
                { $addFields: {
                    answerYesCount: {
                        $size: {
                            $filter: {
                            input: '$quizzes',
                            as: 'quizz',
                            cond: { $eq: ['$$quizz.answer', 'Sim']}
                            }
                        }
                    },
                    answerNoCount: {
                        $size: {
                            $filter: {
                            input: '$quizzes',
                            as: 'quizz',
                            cond: { $eq: ['$$quizz.answer', 'Não'] }
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
