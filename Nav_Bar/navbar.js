// declaring variables
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// add event listener
navToggle.addEventListener('click', function(){
    // if (links.classList.contains('show-links')){
    //    links.classList.remove('show-links'); 
    // } else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
});
/**toggle means onClick will add something and if clicked again it will remove it like flipping a card
 */
