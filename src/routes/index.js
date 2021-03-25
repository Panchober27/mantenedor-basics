const express = require("express");
const router = express.Router();

// Ruta principal del sitio.
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});





module.exports = router;
