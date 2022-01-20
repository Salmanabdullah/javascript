//select items
const grocery = document.getElementById('grocery');
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editFlag = false;

//event listeners
form.addEventListener('submit',addItem)

//functions
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
      const element = document.createElement('article');
      element.classList.add('grocery-item');
      let attr = document.createAttribute('data-id');
      attr.value = id;
      element.setAttributeNode(attr)
      element.innerHTML =`<p class="title">${value}</p>
                <div class="btn-container">
                    <button class="edit-btn" type="button">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" type="button">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`
       //append child
        list.appendChild(element);
        // display alert
        displayAlert('Item is added to the cart','success');
        // show container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id,value);
        //set back to default
        setBackToDefault();
    }
    else if(value && editFlag){
        console.log('editing');
    } 
    else {
        displayAlert('Enter a value','danger')
    }
}
//display alert
function displayAlert (text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert after a certain time
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000)
}