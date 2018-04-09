const express = require ('express')
const app = express();


//Greetings
app.get('/greeting/', (req, res) => {
  res.send("Hello, stranger.")
});


const name = "";
app.get('/greeting/:name', (req, res) => {
  res.send("Hi there, " + req.params.name)
});


app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});

//Tip Calculator

app.get('/tip/:total/:tip', (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tip;
  const tip = total * (tipPercentage/total)
  res.send("Tip = " + tip)
});
