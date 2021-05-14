const express = require('express');
const bp = require('body-parser');
const app = express();
let todo=[{task:'abcv',id:'1'},
{task:'asd', id:'2'}];
app.use(express.static(__dirname+"/frontend"));
app.use(express.json());
app.use(bp.urlencoded({extended:true}));

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
app.get('/api/todos', function(req, res){
    res.json(todo);
 })
 app.get('/api/todos/:todoId', function(req, res){
    var id=req.params.todoId;
    var idx;
    for(i=0;i<todo.length;i++){
        if(todo[i]["id"]==id)
        {
            idx=i;
            break;
        }
    }
    res.json(todo[idx])
 })
app.put('/api/todos/:todoId', function(req, res){
    var id=req.params.todoId;
    var idx,i;
    for(i=0;i<todo.length;i++){
        console.log(todo[i]);
        if(todo[id]==id)
        {
            idx=id;
            break;
        }
    }
    todo[idx]=req.body;
    res.json(todo);
 })

 app.delete('/api/todos/:todoId', function(req, res){
    var id=req.params.todoId;
    var idx;
    for(a in todo){
        if(a[id]==id)
        idx=todo.indexOf(a);
    }
    todo.delete(idx);
 })
 app.post('/api/todos', function(req, res){
    var a=req.body;
    todo.push(a);
    res.json(todo);
 })
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
