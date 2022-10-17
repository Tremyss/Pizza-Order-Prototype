const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 8080

app.use(express.json())

app.get("/", (req, res)=> {

    app.use("/", express.static(`${__dirname}/../frontend/`));
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`))

})

app.get("/api", (req, res)=> {

    console.log("/api endpoint works");
    const pizzasJson = fs.readFileSync(`./database.json`)
    const pizzasObj = JSON.parse(pizzasJson)
    res.json(pizzasObj)
    
})




app.listen(port, ()=> {
    console.log(`server is listening to port ${port}`);
})