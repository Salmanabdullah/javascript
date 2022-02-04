/********javascript class and object */
const userOne = {
    username : 'Salman',
    email: 'salman@gmail.com',
    login: function(){
        console.log('user 1 is logged in')
    },
    logout: function(){
        console.log('user 1 is logged out')
    },
}

console.log(userOne.username);
userOne.login();

/*****for multiple user we have to write the same code everytime like this
 */
const userTwo = {
    username : 'Abdullah',
    email: 'abdullah@gmail.com',
    login: function(){
        console.log('user 2 is logged in')
    },
    logout: function(){
        console.log('user 2 is logged out')
    },
}

console.log(userTwo.username);
userTwo.login();

/*******To solve this javascript has introduced classes. 
 * A class is like a blueprint for an object (it describes how a new object shoukd be made)
 * how to create base properties and functionalities but values will be different
 */

class User{
    constructor(userName) {
        //set up properties
        this.username = userName
    }
}

const userThree = new User('Salman');
const userFour = new User('Abdullah');

console.log(userThree);
console.log(userFour);
/****the new keyword does 3 things
 * it creates a new empty object {}
 * it binds the value of 'this' to the new empty object
 * it calls the constructor function to 'build' the object
 */