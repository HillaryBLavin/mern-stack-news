const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/api/saved", articlesController.find);
router.post("/api/saved", articlesController.create);
router.delete("/api/saved/:id", articlesController.delete);

module.exports = router;
