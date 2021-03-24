// Archivo para manejo de los jefes😋

const jefesController = {};

// Login de jefes.
jefesController.login = (req, res, usr, pass) => {
  req.getConnection((err, conn) => {
    conn.query(
      `SELECT * FROM jefe WHERE username = ${req.usr} AND password = ${req.pass}`,
      (err, rows) => {
        if (err) {
          console.log(err);
          res.send("Error al revisar credenciales.");
        }
        console.log(rows);
        res.render("loged", { rows });
      }
    );
  });
};

// Listado de los jefes.
jefesController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM jefe", (err, rows) => {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      res.render("list-jefes", { rows });
    });
  });
};

module.exports = jefesController;
