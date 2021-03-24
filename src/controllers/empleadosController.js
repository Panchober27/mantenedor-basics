// Archivo que realizara las consultas a la base de datos.
const empleadosController = {};

// Listar empleados desde la base de datos.
empleadosController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM empleado", (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.render("list-emp", { rows });
    });
  });
};

// Añadir un nuevo empleado.
empleadosController.addEmp = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO empleado set ?", [req.body]);
    if (err) {
      console.log(err);
      res.send("Error al insertar empleado 😔");
    }
    console.log(`Se inserto un empleado ${req.body}`);
    res.send(`${req.body}`);
  });
};

module.exports = empleadosController;
