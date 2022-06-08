const express = require("express");
const paisController = require("../controllers/paisController");
const router = express.Router();

router.get('/paises', paisController.list);
router.post('/add-pais', paisController.save);
router.get('/delete-pais/:id', paisController.delete);
router.get('/update-pais/:id', paisController.edit);
router.post('/update-pais/:id', paisController.update);

module.exports = router;