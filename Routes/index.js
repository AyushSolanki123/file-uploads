const router = require("express").Router();

router.use("/api/v1/user", require("./UserRoutes"));
router.use("/api/v1/file", require("./FileRoutes"));

router.get("/", (req, res) => {
    res.redirect("/api/v1");
});

module.exports = router;
