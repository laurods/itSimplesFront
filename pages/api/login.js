const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 5;
const secret = 'abcdefg';

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { email, password } = req.body; 
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("people");
         const people = await col.findOne({ email });         
         if(!people) return res.status(200).json({ message: 'Email incorreto!' });

         const match = await bcrypt.compare(password, people.password);
         if(match) {
            const jwtConfig = { expiresIn: 60 * 60, algorithm: 'HS256' };    
            const { _id, email } = people;
            const token = jwt.sign({ id: _id, email: email }, secret, jwtConfig);
            return res.status(200).json({ token, _id });     
        }
         res.status(200).json({ message: 'Senha incorreta!' });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
