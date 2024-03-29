const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const objReserva = req.body;
        const { cnpj, reserva } = objReserva; 
         await client.connect();         
         const db = client.db(dbName);
         const dataReservas = db.collection("tenant");
          const tenantData = await dataReservas.updateOne(
            {cnpj: cnpj, 'reservas.reserva':reserva}, 
            {$set: {'reservas.$.status': 'Enviado'}}
            )

         res.status(200).json({msg: 'Atualizado'});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
