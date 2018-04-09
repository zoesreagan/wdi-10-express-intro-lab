const express = require ('express')
const app = express();

app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});

//Greetings
app.get('/greeting/', (req, res) => {
  res.send("Hello, stranger.")
});

const name = "";
app.get('/greeting/:name', (req, res) => {
  res.send("Hi there, " + req.params.name)
});


//Tip Calculator

app.get('/tip/:total/:tip', (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tip;
  const tip = total * (tipPercentage/total)
  res.send("Tip = " + tip)
});

//Magic 8 Ball

responseArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question/:answer', (req, res) => {
  const answer = Math.floor(Math.random()*responseArray.length);

  res.send(req.params.question + " ?" + " " + responseArray[answer] + ".");
});
