import express from "express"

const app = express()

// GET Req, send method eka thru response ekk ywnw
app.get("/", (req,res) => {
    res.send("Hello, express")
})

// create server
app.listen(5000, () => {
    console.log("Server is running in port: 5000")
})