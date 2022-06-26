// write your code here
document.addEventListener("DOMContentLoaded", init);
function init(){

function getAllMenu() {
fetch("http:localhost:3000/ramens")  
.then((res)=>res.json())
.then((ramens)=>{
    ;
        
    });
   
}

function renderMenu(menu){
let img = document.createElement("img")
img.innerHTML = `
<img src = "${menu.image}" alt = "Images">`
document.getElementById("ramen-menu").appendChild(img);
console.log(img)
}
function initialize(){
    ramen.forEach(menu => renderMenu(menu))
}
getAllMenu();
initialize()
}