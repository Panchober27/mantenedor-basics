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
      res.render("list-jefes", { rows });
    });
  });
};

module.exports = jefesController;
