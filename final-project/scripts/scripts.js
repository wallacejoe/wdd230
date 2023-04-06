
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//Time of last modification
document.getElementById("currentDate").innerHTML = document.lastModified;

//Hamburger Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Number of ordered specialty drinks
let numOfOrders = Number(window.localStorage.getItem("number-of-orders-ls"));

if (numOfOrders > 1) {
    document.getElementById("specialty-num").textContent = `You have ordered ${numOfOrders} specialty drinks`;
}

if (numOfOrders == 1) {
    document.getElementById("specialty-num").textContent = "You have ordered 1 specialty drink";
}