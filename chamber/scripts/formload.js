/*//Current Date Join Form
let formLoadDate = document.querySelector(".formLoadDate");
formLoadDate.textContent = fulldate;

//Current Time Join Form
let formLoadTime = document.querySelector(".formLoadTime");
const fulltime = `${now.getHours()}:${now.getMinutes()}.${now.getSeconds()}`;
formLoadTime.textContent = fulltime;*/

//Get current date and time
let formLoadTime = document.querySelector(".formLoadTime");
const fulltime = `${now.getHours()}:${now.getMinutes()}.${now.getSeconds()}`;
formLoadTime.textContent = `${fulldate} at ${fulltime}`;
