const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 8080

app.use(express.json())

app.get("/", (req, res)=> {
    //console.log("müködik");
    //res.send("Most mit csinal?")

    res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
})

app.get("/api", (req, res)=> {
    console.log("/api endpoint works");
    //res.send("Most mit csinal?")

    const pizzasJson = fs.readFileSync(`./database.json`)
    //console.log(pizzasJson)
    const pizzasObj = JSON.parse(pizzasJson)
    res.json(pizzasObj)
})




app.listen(port, ()=> {
    console.log(`server is listening to port ${port}`);
})