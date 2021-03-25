const express = require("express");
const router = express.Router();

const empleadosController = require("../controllers/empleadosController");

// Ruta para listar empleados.
router.get("/list-emp", empleadosController.list);

// Ruta para ir al formulario que añade un nuevo empleado.
router.get("/add-e", (req, res) => {
  res.render("empleados/addEmpleado");
});

// Ruta para añadir un nuevo empleado a la base de datos.
router.get("empleados/add-empleado", empleadosController.addEmpleado);

module.exports = router;
