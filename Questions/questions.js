//using selectors inside the element

//select question class
// const viewText = document.querySelectorAll('.question');

// selecting all question class using forEach(). plusBtn is just a
// parameter which contains a question class. click event listener
// targets the current node's class list and toggle show-text class 

// viewText.forEach(function(plusBtn){
//     plusBtn.addEventListener('click', function(e){
//         e.currentTarget.classList.toggle('show-text');
//         viewText.forEach(function(item){
//             if(item !== plusBtn){
//                 item.classList.remove('show-text');
//             }
//         })
//     })
// })




//traversing the DOM

const btns = document.querySelectorAll('.btns');


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        //select the 2nd parent 'question' class
        const text = e.currentTarget.parentElement.parentElement;
        text.classList.toggle('show-text');
        
        btns.forEach(function(item){
            const targetItem = item.parentElement.parentElement;
           if(targetItem!==text){
                targetItem.classList.remove('show-text')
           }
        })

    })
})