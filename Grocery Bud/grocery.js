//select items
const grocery = document.getElementById('grocery');
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//edit option
let editFlag = false;
let editElement;
let editID='';

//event listeners
form.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearItems);

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
                </div>`;
      const deleteBtn = element.querySelector('.delete-btn'); 
      const editBtn = element.querySelector('.edit-btn');
      deleteBtn.addEventListener('click', deleteItem);
      editBtn.addEventListener('click', editItem);
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
        editElement.innerHTML = value;
        displayAlert('value has changed','success');
// edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();

    } 
    else {
        displayAlert('Enter a value','danger');
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
    },2000)
}
//set back to default
function setBackToDefault(){
    grocery.value = '';
    editID = '';
    editFlag = false;
    submitBtn.textContent = 'submit';
}

//clear items function
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('Items has been removed','success');
    setBackToDefault();
}

//delete Item 
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('Item has been removed','success');
    setBackToDefault();
    //remove from local storage
    //    removeFromLocalStorage(id);
    
    
}
//edit item
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit'
    
}
//add to local storage
function addToLocalStorage(id,value){
    const grocery = {id,value};
    console.log(grocery);
}
//edit local storage
function editLocalStorage(editID,value){}
//localStorage API
//setItem
//getItem
//removeItem
//save as string
//remove from local storage
function removeFromLocalStorage(id){};