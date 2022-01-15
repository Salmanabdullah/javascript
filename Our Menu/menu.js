//a menu array
// learn how to get this data using ajax
const menu = [
    {
      id: 1,
      title: "beef burger",
      category: "burger",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "chicken burger",
      category: "burger",
      price: 10.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: "lamb burger",
      category: "burger",
      price: 18.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: "fish burger",
      category: "burger",
      price: 12.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 5,
      title: "vegie burger",
      category: "burger",
      price: 10.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 6,
      title: "pasta",
      category: "pasta",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 7,
      title: "pasta",
      category: "pasta",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 8,
      title: "pizza",
      category: "pizza",
      price: 12.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 9,
      title: "pizza",
      category: "pizza",
      price: 12.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  ];

  // when my page loads i need to call a callback function
  // so i have selected the parent class for all the menu items

const parentItem = document.querySelector('.section-center');

  //target the whole page using window and then listen to DOMContentLoaded
  // then call a callback function
  // map method to iterate through each item of the array 
  // also i can change items using map
  // use join method to remove comma seperators
  // then override the html content of section-center

// window.addEventListener('DOMContentLoaded', function(){
//   let displayMenu = menu.map(function(item) {
//       // return `<h1>${item.title}</h1>`; // returns title of every items
//     return `<article class="menu-item">
//     <img src=${item.img} alt=${item.title} class="photo">
//     <div class="item-info">
//         <header>
//             <h4>${item.title}</h4>
//             <h4 class="price">&euro;${item.price}</h4>
//         </header>
//         <p class="item-description">${item.desc}</p>
//     </div>
// </article>`;
//   });
//   displayMenu = displayMenu.join('');
//   parentItem.innerHTML = displayMenu;
// })

// lets keep the map method in a function so that it can be used again

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
});

function displayMenuItems(items){
  items = items.map(function(item){
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
          <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">&euro;${item.price}</h4>
          </header>
          <p class="item-description">
          ${item.desc}
          </p>
          </div>
        </article>`;
  });
  items = items.join('');
  parentItem.innerHTML = items;
}

  //using forEach method on .filter-btn. on button click using dataset give catagory
  //items a common name. Then make an ''array of caragory' from menu array using
  //filter method.

const filterBtn = document.querySelectorAll('.filter-btn');
filterBtn.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const catagory = e.currentTarget.dataset.id;
    const catagoryArray = menu.filter(function(menuItem){
      if (menuItem.category === catagory){
        return menuItem;
      }
    });
    if (catagory === 'all'){
      displayMenuItems(menu);
    } else {
      displayMenuItems(catagoryArray);
    }
  })
})