//setting up the date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//toggle functionalities
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links')
})