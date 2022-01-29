const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

/** if name/id is defined on the child element then from the parent element i can access it using dot notation.
 * trim() is used to remove white spaces from the input field.
 * reset() is used to reset the input field.
 */

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTodo = addForm.add.value.trim()
    if(newTodo.length){
        addTodo(newTodo)
        addForm.reset()
    }
})
/*setting click event to each trash can will decrease efficiency of the webpage.
It better to select the whole ul container and check currentTarget. i set a common class delete to those
trash cans. if the target contains that class only then i will remove that list*/
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})
/**keyup event listens to any keyboard press and fires. */
search.addEventListener('keyup', ()=> {
    const term = search.value.trim()
    filterTodos(term)
})


/************functions *************/
function addTodo(todo){
    const newList = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
    list.innerHTML += newList;
}
/**Array.from() is used to convert DOMElements to an array format
 * includes() checks a certain given value inside a string
 * 
 */
function filterTodos(term){
    Array.from(list.children)
    .filter(e => !e.textContent.includes(term))
    .forEach(e => e.classList.add('filtered'))

    Array.from(list.children)
    .filter(e => e.textContent.includes(term))
    .forEach(e => e.classList.remove('filtered'))
}

