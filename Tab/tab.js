const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

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
        const content = document.getElementById(id);
        content.classList.add('active');
    }
})