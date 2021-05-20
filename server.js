const express = require('express');
const bp = require('body-parser');
const app = express();
const db= require("./backend/db/dbconn");
const lib = require("./backend/libs/lib");
const model = require("./backend/models/model");
const courselib=require('./backend/libs/courselib');
const config = require('./backend/config/config');
app.use(express.static(__dirname+"/frontend"));
app.use(express.json());
app.use(bp.urlencoded({extended:true}));
db.connect();
//dbconnect.connect();
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
app.get("/tambola", function(req, res){
    res.sendFile(__dirname+"/frontend/html/tambola.html");
})
app.get("/crudbas", function(req, res){
    res.sendFile(__dirname+"/frontend/html/crud.html");
})
app.get('/api/course', function(req,res){
    lib.getall(req,res);
});
app.post('/api/course', function(req, res){
    lib.create(req,res);
})
app.get("/crudupdate", function(req, res){
    res.sendFile(__dirname+"/frontend/html/update.html");
})
app.post('/api/update',function(req,res){
    lib.update(req,res);
})
app.get("/cruddelete", function(req, res){
    res.sendFile(__dirname+"/frontend/html/delete.html");
})
app.post('/api/delete',function(req,res){
    lib.delete(req,res);
})
app.get("/crudoper",function(req,res){
    let filepathname9=__dirname+"/frontend/html/crud2.html";
    res.sendFile(filepathname9);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.post("/crud",courselib.addnewone);
app.put("/crud/:idd", courselib.update);
app.listen(config.webPort, function(){
    console.log("Server Starting running on http://localhost:"+config.webPort);
})
