console.log("script.js loaded")


let getData = async() =>{
        const response = await fetch("http://localhost:8080/api")
        const myData = await response.json()
        console.log(myData)
}
getData();