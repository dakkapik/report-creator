const { MongoClient, ServerApiVersion } = require('mongodb');
//test U2aMjtLly8MATDaR <<< DELETE THIS AFTER
// MongoDB connection URI
const uri = 'mongodb+srv://report-master:U2aMjtLly8MATDaR@cluster0.dab6a.mongodb.net/?retryWrites=true&w=majority';

function run() {
  return new Promise(async (resolve, reject) => {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
      resolve(client)
    } catch (err) {
      reject(err)
      // // Ensures that the client will close when you finish/error
      // console.log("closing db")
      // await client.close();
    }
  })
  
}

module.exports = run;