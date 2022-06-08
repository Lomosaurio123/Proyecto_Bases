const express = require("express");
const carteleraControler = require("../controllers/carteleraController");
const router = express.Router();

router.get('/', carteleraControler.list);
router.post('/add-cartelera', carteleraControler.save);
router.get('/delete-cartelera/:id', carteleraControler.delete);
router.get('/update-cartelera/:id', carteleraControler.edit);
router.post('/update-cartelera/:id', carteleraControler.update);

module.exports = router;