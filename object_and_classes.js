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
    //shorthand of a function is
    live(){
        console.log('go live now')
    }
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
    /***constructor is used only to declare properties. functions are declared after the constructor */
    login(){
        console.log(`${this.username} just logged in`);
    }
    logout(){
        console.log(`${this.username} logged out`);
    }
    scoreIncrement(){
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userThree = new User('Salman');
const userFour = new User('Abdullah');
/****the new keyword does 3 things
 * it creates a new empty object {}
 * it binds the value of 'this' to the new empty object
 * it calls the constructor function to 'build' the object
 */

console.log(userThree, userFour);
userThree.login()
userThree.logout()
userFour.login()
userFour.logout()

userThree.scoreIncrement().logout()
/*****we can chain the methods if only a method will return that object (return this).
 * scoreIncrement method return this object 
 * so it can chain with any other method of that object such as login or logout*/

/******class inheritance or subClasses
 * subClass extends another class, also subclass may have some extra properties and methods
 */
class Admin extends User{

}

const userFive = new Admin('Salman')

console.log(userFive);