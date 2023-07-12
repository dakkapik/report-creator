const express = require('express');
const app = express();
const display = require("./routes/display");
const reports = require("./routes/reports");


require("./db")().then((db)=> {
  process.on('SIGINT', () => {
    db.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
});
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', display);
app.use('/reports', reports);


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});