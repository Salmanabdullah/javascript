const pos = document.querySelector('.box');

pos.addEventListener('mousemove',(e) =>{
    pos.textContent = `x - pos: ${e.offsetX}, y - pos: ${e.offsetY}`
});