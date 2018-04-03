const router = require("express").Router();
const articleRoutes = require("./books");

// Book routes
router.use("/books", articleRoutes);

module.exports = router;
