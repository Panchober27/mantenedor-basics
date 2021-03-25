const express = require("express");
const router = express.Router();

const empleadosController = require("../controllers/empleadosController");
const jefesController = require("../controllers/jefesController");

// Ruta principal del sitio.
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

// Ruta para logear un jefe.
router.get("/logJefe", jefesController.login);


// Ruta para listar jefes.
router.get("/list-jefes", jefesController.list);


// Ruta para modificar un empleado.

// Ruta para eliminar un empleado.

module.exports = router;
