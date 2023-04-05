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
        
                option.textContent = fruit.name;
                //option.setAttribute("class", "businessName");

                menu.appendChild(option);
            })
        } catch (error) {
            console.log(error)
        }
    })
}

fetchFruit();