//setting up the date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//toggle functionalities
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
/*clicking on toggle button will toggle a new class show-links on the parent DOM
which is defined on css file*/

toggleBtn.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links')
})
/*scrolling down after a certain height will fixed the navbar by adding
a new class 'changed-nav' and another new class to act as go-top button to go
back to the top.  */
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

/*smooth scrolling */
const scrolling = document.querySelectorAll('.scroll-link');
scrolling.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const linksTarget = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(linksTarget)
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('changed-nav');
        let offSetTop = element.offsetTop - navHeight;
        if(!fixedNav){
            offSetTop = offSetTop - navHeight;
        }
        if(navHeight > 150){
            offSetTop = offSetTop + containerHeight;
        }
        window.scrollTo({left:0, top:offSetTop,});
        linksContainer.classList.remove('show-links')
    })
})
