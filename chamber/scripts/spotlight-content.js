async function getBusinessesData() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    displaySpotlights(data.businesses);
}

async function displaySpotlights(businesses) {
    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector("#spotlight3");
    let adMembers = [];

    businesses.forEach((business) => {
        if (business.membershipLevel == "Gold" || business.membershipLevel == "Silver")
        {
            adMembers.push(business);
        }
    })

    //Spotlight 1
    let randomNum = getRandomInt(0, adMembers.length)
    let chosenSpotlight = adMembers[randomNum];
    adMembers.pop(randomNum);
    let logo = document.createElement("img");
    let hr = document.createElement("hr");
    let siteLink = document.createElement("a");
    let number = document.createElement("p");

    number.textContent = chosenSpotlight.number;
        
    siteLink.textContent = chosenSpotlight.siteURL;
    siteLink.setAttribute("href", chosenSpotlight.siteURL)

    logo.setAttribute("src", chosenSpotlight.siteLogo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight1.appendChild(logo);
    spotlight1.appendChild(hr);
    spotlight1.appendChild(siteLink);
    spotlight1.appendChild(number);

    //Spotlight 2
    let randomNum2 = getRandomInt(0, adMembers.length)
    let chosenSpotlight2 = adMembers[randomNum2];
    adMembers.pop(randomNum2);
    logo = document.createElement("img");
    hr = document.createElement("hr");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight2.number;
        
    siteLink.textContent = chosenSpotlight2.siteURL;
    siteLink.setAttribute("href", chosenSpotlight2.siteURL)

    logo.setAttribute("src", chosenSpotlight2.siteLogo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight2.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight2.appendChild(logo);
    spotlight2.appendChild(hr);
    spotlight2.appendChild(siteLink);
    spotlight2.appendChild(number);

    //Spotlight 3
    let randomNum3 = getRandomInt(0, adMembers.length)
    let chosenSpotlight3 = adMembers[randomNum3];
    adMembers.pop(randomNum3);
    logo = document.createElement("img");
    hr = document.createElement("hr");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight3.number;
        
    siteLink.textContent = chosenSpotlight3.siteURL;
    siteLink.setAttribute("href", chosenSpotlight3.siteURL)

    logo.setAttribute("src", chosenSpotlight3.siteLogo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight3.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight3.appendChild(logo);
    spotlight3.appendChild(hr);
    spotlight3.appendChild(siteLink);
    spotlight3.appendChild(number);
}

getBusinessesData();

//Found function on the MDN website
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}
