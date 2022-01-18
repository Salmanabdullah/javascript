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
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('changed-nav');
        topLink.classList.add('show-arrow-sign')
    } else {
        navBar.classList.remove('changed-nav')
        topLink.classList.remove('show-arrow-sign')
    }
})
const scrolling = document.querySelectorAll('.scroll-link')
scrolling.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const linksTarget = e.currentTarget.getAttribute('href');
        console.log(linksTarget);
    })
})