//where to display data
const list = document.querySelector('ul')
const form = document.querySelector('form')

//calling from firebase database, get documents
db.collection('recipes').get().then(snapshot =>{
    snapshot.docs.forEach(element => {
        addRecipe(element.data(), element.id)
    });
}).catch(err => console.log(err))

/*******functions */ 
function addRecipe(item, id){
    let time = item.created_at.toDate();
    let html = `
    <li data-id = ${id}>
    <div>${item.title}</div>
    <div>${time}</div>
    <button class = "btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html
}
//add documents
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    //creating new object
    const recipe = {
        title : form.recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)
    }
    //adding to database
    db.collection('recipes').add(recipe).then(()=> {
        console.log('recipe added');
    }).catch(err => console.log(err))
})

//deleting data
list.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id)
            .delete().then(()=> console.log('recipe deleted'))
    }
})