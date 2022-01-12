// define variables
const toggleBtn = document.querySelector('.side-toggle');
const sidebar = document.querySelector('.side');
const closeBtn = document.querySelector('.close-btn')

//adding callback function to add a new class named'show-sidebar' 
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})
//callback function to remove the class
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})