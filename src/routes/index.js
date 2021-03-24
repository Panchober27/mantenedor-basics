const express = require("express");
const router = express.Router();

const empleadosController = require("../controllers/empleadosController");
const jefesController = require('../controllers/jefesController');


// Ruta principal del sitio.
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

// Ruta para listar los empleados.
router.get("/list-emp", empleadosController.list);

// Ruta para listar jefes.
router.get('/list-jefes', jefesController.list);

// Ruta para añadir un empleado.
router.get("/add-emp", empleadosController.addEmp);

// Ruta para modificar un empleado.

// Ruta para eliminar un empleado.

module.exports = router;
