console.log("script.js loaded")
let mainDiv = document.getElementById("pizzas")
let getData = async() =>{
        const response = await fetch("http://localhost:8080/api")
        const myData = await response.json()
        console.log(myData)
        for(const pizza of myData){
       /*          let name = document.createElement("h1")
                name.setAttribute("id", pizza.id)
                name.setAttribute("class","pizza-name")
                name.innerText= pizza.name;
                document.getElementById("pizzas").appendChild(name) */
                let pizzaDiv =document.createElement("div")
                pizzaDiv.setAttribute("id",`${pizza.id}-div`)
                pizzaDiv.setAttribute("class","pizza-card")
                let pizzaImg = document.createElement("img")
                pizzaImg.setAttribute("src",pizza.image)
                pizzaDiv.appendChild(pizzaImg)
                let pizzaName = document.createElement("h2")
                pizzaName.innerText = pizza.name;
                pizzaDiv.appendChild(pizzaName)
                let pizzaIngr = document.createElement("p")
                pizzaIngr.innerText = pizza.ingredients;
                pizzaDiv.appendChild(pizzaIngr)
                let pizzaPrice = document.createElement("h4")
                pizzaPrice.innerText = `${pizza.price} Ft`;
                pizzaDiv.appendChild(pizzaPrice)
                let pizzaInput = document.createElement("input");
                pizzaInput.setAttribute("type","number")
                pizzaInput.setAttribute("id",pizza.id)
                pizzaDiv.appendChild(pizzaInput)
                let orderButton = document.createElement("button")
                orderButton.innerText = "Rendelés"
                pizzaDiv.appendChild(orderButton)

                mainDiv.appendChild(pizzaDiv)

        }

}
getData();
