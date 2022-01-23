//set an array of the reviewers information
const reviews = [
    {
        id:1,
        author:"paul schmidt",
        job:"Designer",
        img:"./img/person-1.jpg",
        info:"lLorem ipsum, dolor sit amet consectetur adipisicing \
        elit. Modi quia, ut sed quae commodi expedita cumque \
        voluptates iste magnam consequatur.",
    },
    {
        id:2,
        author:"maria markel",
        job:"journalist",
        img:"./img/person-2.jpg",
        info:"ipsum, dolor sit amet consectetur adipisicing \
        elit. Modi quia, ut sed quae taka taka commodi expedita cumque \
        voluptates iste magnam consequatur.",
    },
    {
        id:3,
        author:"peter parker",
        job:"web developer",
        img:"./img/person-3.jpg",
        info:"lLorem ipsum, dolor sit amet consectetur adipisicing \
        elit. Modi quia, ut sed quae commodi expedita cumque \
        voluptates iste magnam consequatur.",
    },
]

//define variables
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//define previous and next button
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

//set event listener using DOMContentLoaded
let item = 0;
window.addEventListener("DOMContentLoaded", function(){
    findPerson(item);
});

//define a function to get person's info togather
function findPerson(person){
    const items = reviews[person];
    img.src = items.img;
    author.textContent = items.author;
    job.textContent = items.job;
    info.textContent = items.info;
}
//set what next-btn and pervious-btn will do
nextBtn.addEventListener('click', function(){
    item++;
    if (item >reviews.length - 1){
        item = 0;
    }
    findPerson(item);
    })
previousBtn.addEventListener('click', function(){
    item--;
    if (item < 0){
        item = reviews.length - 1;
    }
    findPerson(item);
})

/***********another way********* */
// let item = 0;

// window.addEventListener('DOMContentLoaded', findPerson(item));
// nextBtn.addEventListener('click', nextPerson)
// previousBtn.addEventListener('click', previousPerson)

// function findPerson(person){
//     const items = reviews[person];
//     img.src = items.img;
//     author.textContent = items.author;
//     job.textContent = items.job;
//     info.textContent = items.info;
// }

// function nextPerson(){
//     item++;
//     if (item >reviews.length - 1){
//         item = 0;
//     }
//     findPerson(item);
// }

// function previousPerson(){
//     item--;
//     if (item < 0){
//         item = reviews.length - 1;
//     }
//     findPerson(item);
// }