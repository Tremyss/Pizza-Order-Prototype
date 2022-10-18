const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 8080

app.use(express.json())
app.use(express.static(`${__dirname}/../frontend/`));

app.get("/", (req, res)=> {

    res.sendFile(path.join(`${__dirname}/../frontend/index.html`))

})

app.get("/api", (req, res)=> {


    const pizzasJson = fs.readFileSync(`./database.json`)
    const pizzasObj = JSON.parse(pizzasJson)
    res.json(pizzasObj)

})




app.listen(port, ()=> {
    console.log(`server is listening to port ${port}`);
})