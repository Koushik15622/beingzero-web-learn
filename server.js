const express = require('express');
const bp = require('body-parser');
const app = express();
const db= require("./backend/db/dbconn");
const lib = require("./backend/libs/lib");
const model = require("./backend/models/model");
app.use(express.static(__dirname+"/frontend"));
app.use(express.json());
app.use(bp.urlencoded({extended:true}));
db.connect();
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
app.get("/todo", function(req, res){
    res.sendFile(__dirname+"/frontend/html/todo.html");
})
app.get("/todos", function(req, res){
    res.sendFile(__dirname+"/frontend/html/todos.html");
})
app.get("/crud", function(req, res){
    res.sendFile(__dirname+"/frontend/html/crud.html");
})
app.get('/api/course', function(req,res){
    lib.getall(req,res);
});
app.post('/api/course', function(req, res){
    lib.create(req,res);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
