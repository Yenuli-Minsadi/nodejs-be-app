import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

// middleware - like filters in springboot, to handle data as json before handling req
//middleware to parse JSON bodies
app.use(express.json())
app.use(cors())

interface Customer {
    id: number
    name: string
    age: number
    isAdmin: boolean
    email?: string //optional 
}

const customers: Customer[] = [
  { id: 1, name: "Yen", age: 22, isAdmin: true },
  { id: 2, name: "Min", age: 23, isAdmin: true },
  { id: 3, name: "Dilara", age: 18, isAdmin: true },
  { id: 4, name: "Sarasi", age: 21, isAdmin: true },
  { id: 5, name: "Ruvinda", age: 23, isAdmin: true }
]

// GET Req, send method eka thru response ekk ywnw
app.get("/api/v1/customer", (req, res) => {
//   console.log("req came");
//   res.send("Hello, express");
res.json({ message: "OK", data: customers})
});

app.post("/api/v1/customer", (req: Request, res: Response) => {
  // const data = req.body //w/o the middleware methanna data allgnna ba, allgnna wenne na
  // console.log("Body data: ", data)
  // res.status(200).json({
  //     message: "Data received successfully!",
  //     data
  // })
  const data = req.body;
  // const name = data.name
  // const age = data.age
  // const isAdmin = data.isAdmin
//    const newCustomer: Customer = {
//      id: Date.now(),
//      name: data.name,
//      age: data.age,
//      isAdmin: data?.isAdmin,
//      email: data?.email,
//    }
  const newCustomer: Customer = {
    id: Date.now(),
    ...data
  }
  customers.push(newCustomer)
  res.status(201).json({ message: "Customer saved....", data: newCustomer });
})


// create server
app.listen(5000, () => {
    console.log("Server is running in port: 5000")
})