const { Router } = require("express");
const router = Router();
const AlunoController = require("../controllers/AlunoController.js");

"/alunos/create"

router.get("/", AlunoController.index);
router.get("/create", AlunoController.create);
router.post("/create", AlunoController.store);
router.get("/:id/edit", AlunoController.edit)

module.exports = router;