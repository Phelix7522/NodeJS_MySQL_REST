const express = require("express")
const router = express.Router()

const authController = require("../controller/auth.controller")

router.post("/",authController.getGenToken)
router.get("/valid-token",authController.validateToken)


module.exports = router