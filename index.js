const express = require ('express')
const app = express();


//Greetings
app.get('/greeting/', (req, res) => {
  res.send("Hello, stranger.")
});


const name = "";
app.get('/greeting/:name', (req, res) => {
  res.send("hi there, " + req.params.name)
});


app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
