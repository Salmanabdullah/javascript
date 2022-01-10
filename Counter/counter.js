//set initail count
let count = 0;

//set value and buttons
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

//using forEach for callback function
btns.forEach(function(btn){   
 btn.addEventListener('click', function(e){
     //accessing event object
    const styles = e.target.classList;

    //select specific classes
    if (styles.contains('decrease')) {
        count--;
    } else if(styles.contains('increase')){
        count++;
    } else {
        count = 0;
    }
    if (count > 0){
        value.style.color = 'green'
    }
    else if (count < 0){
        value.style.color = 'red'
    }
    else{
        value.style.color = 'black'
    }
    value.textContent = count;

 });

});  

