//where to display data
const list = document.querySelector('ul')
const form = document.querySelector('form')

//calling from firebase database, get documents
db.collection('recipes').get().then(snapshot =>{
    snapshot.docs.forEach(element => {
        addRecipe(element.data())
    });
}).catch(err => console.log(err))

/*******functions */
function addRecipe(item){
    let time = item.created_at.toDate();
    let html = `
    <li>
    <div>${item.title}</div>
    <div>${time}</div>
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