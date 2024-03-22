const express = require("express"); // importar express
const { faker } = require ('@faker-js/faker');
const Company = require("./Company"); 
const User = require("./User");

const app = express(); // invocar express
// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = new User();
  const newComp = new Company();
  res.json([newUser, newComp]);
})

// ejecutar el servidor en el puerto 8000
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
