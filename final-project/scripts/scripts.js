
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//Time of last modification
document.getElementById("currentDate").innerHTML = document.lastModified;

//Hamburger Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
