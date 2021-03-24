// Archivo para el logeo de un jefe al sistema.

const loginController = {};


loginController.login = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM jefe WHERE username')
    })
}

// REVISA ESTE METODO EN EXTRA LIMPIO PA MODELAR!!!


module.exports = loginController;