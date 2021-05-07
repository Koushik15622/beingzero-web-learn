const express = require('express');

const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    res.send("Basic site");
})
app.get("/home", function(req, res){
    res.send("Welcome home!!");
})
app.get("/res", function(req, res){
    res.sendFile(__dirname+"/Resume-Koushik-PLN.pdf");
})
app.get("/resume", function(req, res){
    res.sendFile(__dirname+"/frontend/html/site.html");
})
app.get("/google", function(req, res){
    res.sendFile(__dirname+"/frontend/html/search.html");
})
app.get("/color", function(req, res){
    res.sendFile(__dirname+"/frontend/html/color.html");
})
app.get("/login", function(req, res){
    res.sendFile(__dirname+"/frontend/html/login.html");
})
app.get("/register", function(req, res){
    res.sendFile(__dirname+"/frontend/html/register.html");
})
app.get("/chart", function(req, res){
    res.sendFile(__dirname+"/frontend/html/chart.html");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
