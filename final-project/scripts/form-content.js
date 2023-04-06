async function fetchFruit(){
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

function setContent(fruitData){
    const menu = document.querySelectorAll(".menu");
    menu.forEach((menu) => {
        try {
            fruitData.forEach((fruit) => {
                let option = document.createElement("option");
        
                option.setAttribute("value", fruit.id);
                option.textContent = fruit.name;
                //option.setAttribute("class", "businessName");

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
}

fetchFruit();

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
