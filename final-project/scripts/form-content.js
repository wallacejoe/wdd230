async function initializeFruit(){
    const fruitUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";
    try {
        const response = await fetch(fruitUrl);
        if (response.ok){
            const fruitData = await response.json();
            //console.log(fruitData);
            setContent(fruitData);
        }
    } catch (error) {
        console.log(error)
    }
}

async function fetchFruit(option1, option2, option3){
    const fruitUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";
    try {
        const response = await fetch(fruitUrl);
        if (response.ok){
            const fruitData = await response.json();
            getNutrients(option1, option2, option3, fruitData)
        }
    } catch (error) {
        console.log(error)
    }
}

initializeFruit();

function setContent(fruitData){
    const menu = document.querySelectorAll(".menu");
    menu.forEach((menu) => {
        try {
            fruitData.forEach((fruit) => {
                let option = document.createElement("option");
        
                option.setAttribute("value", fruit.id);
                option.textContent = fruit.name;

                menu.appendChild(option);
            })
        } catch (error) {
            console.log(error)
        }
    })
}

function getOrderDate(){
    let formLoadTime = document.querySelector(".formLoadTime");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
    formLoadTime.textContent = `${fulldate}`;
}

function getPersonalInfo(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    document.getElementById("nameValue").textContent = name;
    document.getElementById("emailValue").textContent = email;
    document.getElementById("phoneValue").textContent = phone;
}

function getSelectedFruit(){
    const menu = document.getElementById("1stMenu");
    const secondMenu = document.getElementById("2ndMenu");
    const thirdMenu = document.getElementById("3rdMenu");

    document.getElementById("1stFruit").textContent = menu.options[menu.selectedIndex].text;
    document.getElementById("2ndFruit").textContent = secondMenu.options[secondMenu.selectedIndex].text;
    document.getElementById("3rdFruit").textContent = thirdMenu.options[thirdMenu.selectedIndex].text;

    let textArea = document.getElementById("textArea").value;
    if (textArea == ""){
        textArea = "Any special instructions will be displayed here.";
    }
    document.getElementById("specialInfo").textContent = textArea;
    fetchFruit(menu, secondMenu, thirdMenu);
}

function getNutrients(option1, option2, option3, fruitData){
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let cals = 0;
    let sugar = 0;
    fruitData.forEach((fruit) => {
        if (option1.value == fruit.id || option2.value == fruit.id || option3.value == fruit.id)
        {
            carbs += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            cals += fruit.nutritions.calories;
            sugar += fruit.nutritions.sugar;
        }
    })

    document.getElementById("carbs").textContent = `Carbohydrates: ${carbs}`;
    document.getElementById("protein").textContent = `Protein: ${protein}`;
    document.getElementById("fat").textContent = `Fat: ${fat}`;
    document.getElementById("cals").textContent = `Calories: ${cals}`;
    document.getElementById("sugar").textContent = `Sugar: ${sugar}`;
}

function formOutput(){
    //console.log("Hello World");
    try {
        document.querySelector(".hidden").setAttribute("class", "");
    } catch {}

    getSelectedFruit();
    getPersonalInfo();
    getOrderDate();
    document.querySelector(".freshBtn").setAttribute("class", "hidden");
}

document.querySelector("#formSubmission").addEventListener("submit", formOutput);
