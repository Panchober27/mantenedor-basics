// Archivo para manejo de los jefes😋
const jefesController = {};

// Listado de los jefes.
jefesController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM jefe", (err, rows) => {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      res.render("jefes/list-jefes", { rows });
    });
  });
};


// Esto no esta correcto aqui, se cambiara de carpeta y de logica 😁
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

module.exports = jefesController;
