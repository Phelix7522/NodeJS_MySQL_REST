const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/",postsController.getAll)
router.get("/:id",postsController.getById)
router.post("/",postsController.create)
router.put("/postupdate/:id",postsController.update)
router.delete("/postdelete/:id",postsController.delete)


module.exports = router