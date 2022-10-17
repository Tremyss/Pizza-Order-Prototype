console.log("script.js loaded")

let getData = async() =>{
        const response = await fetch("http://localhost:8080/api")
        const myData = await response.json()
        console.log(myData)
        for(const pizza of myData){
                let name = document.createElement("h1")
                name.setAttribute("id", pizza.id)
                name.setAttribute("class","pizza-name")
                name.innerText= pizza.name;
                document.getElementById("pizzas").appendChild(name)
        }

}
getData();
