const express = require("express")
var bodyParser = require('body-parser');

const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

//**Routers */
const postsRouter = require('./routes/posts.router')
app.use("/api/v1/posts",postsRouter)

const authRouter = require('./routes/auth.router')
app.use("/api/v1/auth",authRouter)

const fileuploadRouter = require('./routes/fileupload.router')
app.use("/api/v1/fileupload",fileuploadRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log("Server running ... ")
})

