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
         const financeiro = db.collection("financeiro");
         const diario = await financeiro.aggregate(
            [
                {$match: {
                    cnpj: `${cnpj}`,
                    categoria:'Venda'
                }
            }, {$group: {
                _id: '$day',
                vlrTotal: {
                  $sum: '$valor' 
                  }
              }}]

         ).toArray();

         const mensal = await financeiro.aggregate(
            [
                {$match: {
                    cnpj: `${cnpj}`,
                    categoria:'Venda'
                }
            }, {$group: {
                _id: '$month',
                vlrTotal: {
                  $sum: '$valor' 
                  }
              }}]

         ).toArray();

         const anual = await financeiro.aggregate(
            [
                {$match: {
                    cnpj: `${cnpj}`
                }
            }, {$group: {
                _id: '$year',
                vlrTotal: {
                  $sum: '$valor' 
                  }
              }}]

         ).toArray();

         const saldos = await financeiro.aggregate(
            [
                {
                    $match: { cnpj: `${cnpj}`}
            }, {$group: {
                _id: '$conta',
                vlrTotal: {
                  $sum: '$valor' 
                  }
              }}]

         ).toArray();

         const produtosBaixarEstoque = await financeiro.find(
             { cnpj : cnpj, baixouEstoque: "nao", categoria: "Venda" }
             ).toArray()     

         const all = await financeiro.find({ cnpj : cnpj }).toArray()

         const objMovimento = {};
         objMovimento['diario'] = diario;
         objMovimento['mensal'] = mensal;
         objMovimento['anual'] = anual;
         objMovimento['saldos'] = saldos;
         objMovimento['produtosBaixarEstoque'] = produtosBaixarEstoque;
         objMovimento['all'] = all;

         res.status(200).json(objMovimento);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
