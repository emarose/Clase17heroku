const methodOverride = require("method-override");
const cors = require("cors");
const express = require("express");

//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"]; 

app.use(cors());
app.use(methodOverride());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/users", (req, res)=>{
   res.send(users);
});

app.post("/user/create",(req, res)=>{
  const { nombre } = req.body;
  users.push(req.body.nombre);
  res.send("usuario creado");
});

app.put('/user/:viejo/:nuevo', (req,res)=>{
  users = users.filter(user => user !== req.params.viejo);
  users.push(req.params.nuevo);
  res.send('Usuario actualizado');
})

app.listen(port, ()=>{
    log("start server");
});

app.delete("/user/:nombre", (req,res)=>{
  users = users.filter(user => users !== req.params.nombre);
  res.send('usuario borrado');
});