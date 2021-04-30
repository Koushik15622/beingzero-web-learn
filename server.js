const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Basic site");
})
app.get("/home", function(req, res){
    res.send("Welcome home!!");
})
app.get("/res", function(req, res){
    res.sendFile("C:\Users\psrao\Downloads\Resume-Koushik-PLN.pdf");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
