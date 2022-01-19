const express = require("express");
const cors = require("cors");
const addUsertoDb = require("./handlers/addUser");
const sendUser = require("./handlers/sendUser");
const db = require("./db");
const fetchAll = require("./handlers/fetchAll");
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())

app.get("/status", (req, res) => {
    res.send("Running....")
})


app.post("/getUser", async (req, res) => {
    console.log("Client made a request getuser " , req.body)
    const body = req.body
  
    if(!body.email || !body.password) return res.sendStatus(403)

    let query = await sendUser(body)

    console.log("response ", query)

    res.send({response: query })
})


app.post("/addUser", async (req, res) => {
    console.log("Client made a request " ,req)
    const body = req.body
  
    let query = await addUsertoDb(body)

    console.log("response ", query)

    res.send({response: query })
})


app.get("/fetchAll", async (req, res) => {
    console.log("Client made a request fetchall " , req)
  
    let query = await fetchAll()

    console.log("response ", query)

    res.send({response: query })
})

app.listen(PORT)

console.log(`Server running on ${PORT}`)