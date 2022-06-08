const express = require("express");
const  peliculaController = require("../controllers/peliculaController");
const router = express.Router();

router.get('/peliculas', peliculaController.list);
router.post('/add-pelicula', peliculaController.save);
router.get('/delete-pelicula/:id', peliculaController.delete);
router.get('/update-pelicula/:id', peliculaController.edit);
router.post('/update-pelicula/:id', peliculaController.update);

module.exports = router;