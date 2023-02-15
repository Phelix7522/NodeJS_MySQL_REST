const fileupload_controller = {

    uploadSingleFile(req, res){
        console.log(req.body);
        console.log(req.singleFile); // 
        res.json({ message: "Successfully uploaded files" });
    },

    uploadFiles(req, res) {
        console.log(req.body);
        console.log(req.files);
        res.json({ message: "Successfully uploaded files" });
    }
    
}

module.exports = fileupload_controller