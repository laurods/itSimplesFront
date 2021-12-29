const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const salesAllAndSubstitutes = {};
        const { cnpj } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const substitutes = db.collection("salesSubstitutes");
         const all = db.collection("salesAll");
         const salesSubstitutes = await substitutes.aggregate(
            [
                {$match: {
                    cnpj: `${cnpj}`
                }
            }, {$addFields: {
                vTotal: {
                  $toDouble: '$total'
                }
              }}, {$group: {
                _id: '$movimento',
                vlrTotal: {
                  $sum: '$vTotal' 
                  }
              }}]

         ).toArray();

         const salesAll = await all.aggregate(
            [
                {$match: {
                    cnpj: `${cnpj}`
                }
            }, {$addFields: {
                vTotal: {
                  $toDouble: '$total'
                }
              }}, {$group: {
                _id: '$movimento',
                vlrTotal: {
                  $sum: '$vTotal' 
                  }
              }}]

         ).toArray();
         salesAllAndSubstitutes['substitutes'] = salesSubstitutes;
         salesAllAndSubstitutes['all'] = salesAll;

         
        //  salesAllAndSubstitutes.push(salesSubstitutes)
        //  salesAllAndSubstitutes.push(salesAll)

         res.status(200).json(salesAllAndSubstitutes);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
