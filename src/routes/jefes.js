const express = require('express');
const router = express.Router();

const jefesController = require('../controllers/jefesController');



// Ruta para listar a los jefes.
router.get('/list-jefes', jefesController.list);




module.exports = router;