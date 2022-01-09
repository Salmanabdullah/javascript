const colors =["green","red","blue","yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    // select color randomly from colors
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    //return Math.random();
    return Math.floor(Math.random() * colors.length);
}