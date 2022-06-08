const express = require("express");
const tipoController = require("../controllers/tipoController");
const router = express.Router();

router.get('/tipos', tipoController.list);
router.post('/add-tipo', tipoController.save);
router.get('/delete-tipo/:id', tipoController.delete);
router.get('/update-tipo/:id', tipoController.edit);
router.post('/update-tipo/:id', tipoController.update);

module.exports = router;