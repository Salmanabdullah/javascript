//a menu array
// learn how to get this data using ajax
const menu = [
    {
      id: 1,
      title: "beef burger",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "chicken burger",
      category: "breakfast",
      price: 10.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: "lamb burger",
      category: "breakfast",
      price: 18.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: "fish burger",
      category: "breakfast",
      price: 12.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 5,
      title: "vegie burger",
      category: "breakfast",
      price: 10.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  ];

// when my page loads i need to call a callback function
// so i have selected the root class for all the menu items

const parentItem = document.querySelector('.section-center');

//target the whole page using window and then listen to DOMContentLoaded
// then call a callback function
window.addEventListener('DOMContentLoaded', function(){
  // console.log("hey there");
  // map method to iterate through each item of the array 
  // also i can change items using map
  let displayMenu = menu.map(function(item) {
    // return `<h1>${item.title}</h1>`; // returns title of every items
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">&euro;${item.price}</h4>
        </header>
        <p class="item-description">${item.desc}</p>
    </div>
</article>`;
  });
  displayMenu = displayMenu.join('');
  // console.log(displayMenu);
  parentItem.innerHTML = displayMenu;
})