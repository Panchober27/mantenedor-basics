// Archivo que realizara las consultas a la base de datos.
const empleadosController = {};

// Listar empleados desde la base de datos.
empleadosController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM empleado", (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.render("empleados/list-emp", { rows });
    });
  });
};


// Añadir un nuevo empleado.
empleadosController.addEmpleado = (req, res) => {
  res.send("Empleado recibido");
};

module.exports = empleadosController;
