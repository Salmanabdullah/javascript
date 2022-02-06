db.collection('recipes').get().then(() =>{
    //when we have data
}).catch(err => console.log(err))