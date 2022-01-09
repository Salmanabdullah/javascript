const colors =["green","red","blue","yellow"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener('click',function(){
    const randomNumber = 2;
    document.body.style.backgroundColor =colors[randomNumber]
})