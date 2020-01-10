const express = require("express");
const router = express.Router();
const todosCtrl = require("../controllers/todosctrl");

router.get("/", todosCtrl.index);
router.post("/", todosCtrl.createOne);
router.delete("/:id", todosCtrl.deleteOne);

module.exports = router;
