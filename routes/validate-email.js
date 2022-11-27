var express = require("express");
var router = express.Router();
const {validateEmail} = require("../controllers/validate-email")

router.post("/validate-email", validateEmail);

module.exports = router;