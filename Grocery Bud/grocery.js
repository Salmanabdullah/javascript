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

//***********event listeners***********
//submit form
form.addEventListener('submit',addItem);
//clear list
clearBtn.addEventListener('click',clearItems);
//display items onload
window.addEventListener('DOMContentLoaded',setupItems);

//*******functions*************
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id,value);
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
        displayAlert('item name has changed','success');
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
    localStorage.removeItem('list');
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
    removeFromLocalStorage(id);
    
    
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
    const grocery = {id:id, value:value};
    let items = getLocalStorage()
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}
//edit local storage
function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

// get local storage
function getLocalStorage(){
    return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
}

//remove from local storage
function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
};


//setup items
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

// create list items
function createListItem(id,value){
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
}