const express = require("express");
const  directorController = require("../controllers/directorController");
const router = express.Router();

router.get('/directores', directorController.list);
router.post('/add-director', directorController.save);
router.get('/delete-director/:id', directorController.delete);
router.get('/update-director/:id', directorController.edit);
router.post('/update-director/:id', directorController.update);

module.exports = router;