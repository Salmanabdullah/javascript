//select items
const grocery = document.getElementById('grocery');
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//event listeners
form.addEventListener('submit',addItem)

//functions
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
}