const express = require("express")
const router = express.Router()
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const fileuploadController = require("../controller/fileupload.controller")

router.post("/upload-single-file",upload.single("singleFile"),fileuploadController.uploadSingleFile)
router.post("/upload-files",upload.array("files"),fileuploadController.uploadFiles)


module.exports = router