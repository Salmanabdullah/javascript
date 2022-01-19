const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

/**target the container. use dataset property to target the buttons.
 * set same id property for dataset and the content container.
  */
about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if (id){
        //romeve active class from other button
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        })
        // remove active class from content class
        contents.forEach(function(f){
            f.classList.remove('active');
        })
        //add active class
        document.getElementById(id).classList.add('active')
        // const content = document.getElementById(id);
        // content.classList.add('active');
    }
})