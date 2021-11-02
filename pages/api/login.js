"use strict";
// Import the dependency.
const clientPromise = require('../../config/mongodb-client');
                      
 async function run() {
    try {
       const client = await clientPromise; 
        await client.connect();
         console.log("Connected correctly to server");         
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);