const mongoose = require('mongoose');
//test U2aMjtLly8MATDaR <<< DELETE THIS AFTER
// MongoDB connection URI
const uri = 'mongodb+srv://report-master:U2aMjtLly8MATDaR@cluster0.dab6a.mongodb.net/report-creator?retryWrites=true&w=majority';

function run() {
  return new Promise(async (resolve, reject) => {
   
      let client = await mongoose.connect(uri, 
        {useNewUrlParser: true}).then(
          (db) =>{
            console.log("db connection successfull")
            resolve(db)
          },
          (err) => reject(err)
        )
  })
  
}

module.exports = run;