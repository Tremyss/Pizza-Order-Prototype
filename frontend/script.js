console.log("script.js loaded");
let mainDiv = document.getElementById("pizzas");

// ? Kiolvassa a hozzá tartozó input mező value-ját.
// * Global scope-on létrehozunk egy actualOrder nevű tömböt
// ? az actualOrder-be belepusholjuk a databsae adott pizza-objectjét
// ? beleírjuk az input mező actual value-ját
// ? ha már szerepel ez a pizza-object, akkor majd kitaláljuk mi a fenét kezdjünk vele

let actualOrder = [];

let pizzaObj;
let pizzaArray;
let inputValue;
let pizzaTitle;

let getData = async () => {
  const response = await fetch("http://localhost:8080/api");
  const myData = await response.json();
  // console.log(myData)
  pizzaArray = myData;

  for (const pizza of myData) {
    /*       let name = document.createElement("h1")
                name.setAttribute("id", pizza.id)
                name.setAttribute("class","pizza-name")
                name.innerText= pizza.name;
                document.getElementById("pizzas").appendChild(name) */
    let pizzaDiv = document.createElement("div");
    pizzaDiv.setAttribute("id", `${pizza.id}-div`);
    pizzaDiv.setAttribute("class", "pizza-card");

    let pizzaImg = document.createElement("img");
    pizzaImg.setAttribute("src", pizza.image);
    pizzaDiv.appendChild(pizzaImg);

    let pizzaContent = document.createElement("div");
    pizzaContent.setAttribute("class", "pizza-content");
    pizzaDiv.appendChild(pizzaContent);

    let pizzaName = document.createElement("h2");
    pizzaName.innerText = pizza.name;
    pizzaContent.appendChild(pizzaName);

    let pizzaIngr = document.createElement("p");
    pizzaIngr.innerText = pizza.ingredients;
    pizzaContent.appendChild(pizzaIngr);

    let pizzaPrice = document.createElement("h4");
    pizzaPrice.innerText = `${pizza.price} Ft`;
    pizzaContent.appendChild(pizzaPrice);

    let pizzaInput = document.createElement("input");
    pizzaInput.setAttribute("type", "number");
    pizzaInput.setAttribute("id", `${pizza.id}-input`);
    pizzaContent.appendChild(pizzaInput);
    // pizzaInput.addEventListener("input")

    let orderButton = document.createElement("button");
    orderButton.innerText = "Kosárhoz ad";
    orderButton.setAttribute("id", `${pizza.id}-btn`);
    pizzaContent.appendChild(orderButton);
    orderButton.addEventListener("click", addToChart);

    mainDiv.appendChild(pizzaDiv);
  }
};
getData();

const addToChart = (event) => {
  inputValue = event.target.previousSibling.value;
  pizzaTitle = event.target.parentElement.children[0].innerText;
  for (const pizza of pizzaArray) {
    if (pizzaTitle === pizza.name) {
      pizza.amount = Number(inputValue);    
      pizzaObj = pizza;
    }
  }

  if(actualOrder.length === 0){
    actualOrder.push(pizzaObj)
  }else{   
      const index = actualOrder.findIndex( pizza => pizza.id === pizzaObj.id)
      if(index ===-1){
        actualOrder.push(pizzaObj)
      }else{
        console.log(index)
          actualOrder[index].amount = pizzaObj.amount
      }
  }
  console.log(actualOrder)
}


document.getElementById("orderDiv").onsubmit= function (event){
  event.preventDefault();
  console.dir(event.target.elements)

  const name=event.target.name.value
  console.log(name)

  const zipCode=event.target.zipCode.value
  console.log(zipCode)

  const city=event.target.city.value
  console.log(city)

  const street = event.target.street.value
  console.log(street)

  const houseNumber = event.target.houseNumber.value
  console.log(houseNumber)

  console.log(event)
}






    









