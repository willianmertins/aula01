const express = require("express");

const app = express();

//Middlewares
//Para usar o JSON na aplicação
app.use(express.json());

//localhost:3333

//GET
app.get("/courses", (req, res) => {
  //Query params
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1","Curso 2","Curso 3"]);
  });

//POST
app.post("/courses", (req,res) => {
  //Body params
  const body = req.body;
  console.log(body);
  return res.json(["Curso 1","Curso 2","Curso 3","Curso 4"]);
})

//PUT
app.put("/courses/:id", (req, res) => {
  //Route Params
  const { id } = req.params;
  console.log(id);
  return res.json(["Curso 6","Curso 2","Curso 3","Curso 4"]);
})

//PATCH
app.patch("/courses/:id", (req,res) => {
  return res.json(["Curso 6","Curso 7","Curso 3","Curso 4"]);
})

//DELETE
app.delete("/courses/:id", (req,res) => {
  return res.json(["Curso 6","Curso 7","Curso 4"]);
})

app.listen(3333);




