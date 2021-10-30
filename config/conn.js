const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dosimples:it23102021@cluster0.7cclw.mongodb.net/itsimples?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("itsimples").collection("people");
  // perform actions on the collection object
  client.close();
});
