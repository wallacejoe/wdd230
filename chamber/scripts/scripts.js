
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

let date1 = document.getElementById("currentTime");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date1.innerHTML = fulldate;

document.getElementById("currentDate").innerHTML = document.lastModified;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
