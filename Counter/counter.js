//set initail count
let count = 0;

//set value and buttons
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

//using forEach for callback function
btns.forEach(function(btn){   
 btn.addEventListener('click', function(e){
     //accessing event object
    const select = e.target.classList;

    //select specific classes
    if (select.contains('decrease')) {
        count--;
    } else if(select.contains('increase')){
        count++;
    } else {
        count = 0;
    };
    value.textContent = count;

 });

});  



