//setting variables
const colors =["green",'#37C268',"red",'#C1FCBC',"blue","yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/******Event listeners ***********/
btn.addEventListener('click',colorChanger);

/********Functions *********/
function colorChanger(){
    // select color randomly from colors
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}