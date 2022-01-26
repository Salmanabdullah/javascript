// define variables for modal button, modal and closing button
const btn = document.querySelector('.btn')
const mdl = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')

//click on modal button will add open-modal class
btn.addEventListener('click', function(){
    mdl.classList.add('open-modal')
});
// click on close-btn will remove the class 
closeBtn.addEventListener('click', function(){
    mdl.classList.remove('open-modal')
});