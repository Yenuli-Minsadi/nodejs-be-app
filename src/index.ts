import express, { Request, Response } from "express"

const app = express()

// middleware - like filters in springboot, to handle data as json before handling req
//middleware to parse JSON bodies
app.use(express.json())

// GET Req, send method eka thru response ekk ywnw
app.get("/", (req,res) => {
    console.log("req came")
    res.send("Hello, express")
})

app.post("/api/v1/save", (req: Request, res: Response) => {
    const data = req.body //w/ou the middleware methanna data allgnna ba, allgnna wenne na
    console.log("Body data: ", data)
    res.status(200).json({
        message: "Data received successfully!",
        data
    })
})

// create server
app.listen(5000, () => {
    console.log("Server is running in port: 5000")
})