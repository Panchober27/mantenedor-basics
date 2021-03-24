const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myconnection = require("express-myconnection");

const app = express();

// Settings.
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares.
app.use(morgan("dev"));
// Aqui iran las confguraciones de la base de datos.
app.use(
  myconnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "admin",
      port: 3306,
      database: "empleados_basic_db",
    },
    "single"
  )
);
// Configuración bd remota a futuro😋😋
// app.use(
//   myconnection(
//     mysql,
//     {
//       host: "bwb26jvsxkjvjhjvdagw-mysql.services.clever-cloud.com",
//       user: "u9qq1kcxqujoa3wa",
//       password: "7gXqJhtuFLkFoJNZ6D5W",
//       port: 3306,
//       database: "bwb26jvsxkjvjhjvdagw",
//     },
//     "single"
//   )
// );

// Datos tipo json.
app.use(express.json());
// URL encoded.
app.use(express.urlencoded({ extended: false }));

// Static files.
app.use(express.static(path.join(__dirname, "public")));

// Routes.
app.use(require("./routes"));

// Starting the server.
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`);
});
