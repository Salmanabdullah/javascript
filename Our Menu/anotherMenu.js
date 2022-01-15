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
    {
        id: 10,
        title: "kabab",
        category: "Kabab",
        price: 20.99,
        img: "./images/item-1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
  ];

  // select the container
  const container = document.querySelector('.section-center');
  
 
  // on load
  window.addEventListener('DOMContentLoaded', function(){
    menuContainer(menu);
    addingNewBtns();    
})
  // add data dynamically to the menuContainer from menu array
  

  // place this in a function for iteration
  function menuContainer(menuItems){
    menuItems = menuItems.map(function(e){
        return `<article class="menu-item">
        <img src=${e.img} alt=${e.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${e.title}</h4>
                <h4 class="price">&euro;${e.price}</h4>
            </header>
            <p class="item-description">
            ${e.desc}
            </p>
        </div>
    </article>`;
      })
      menuItems = menuItems.join('')
      container.innerHTML = menuItems;
  }

  // filter buttons categorywise. on click will display only selected category items
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(f){
      const categoryName = f.currentTarget.dataset.id;
      const categoryArray = menu.filter(function(menuItem){
          if (menuItem.category === categoryName){
              return menuItem;
          }
      })
      //function call to display on button click
      if (categoryName === 'all'){
          menuContainer(menu);
      } else {
          menuContainer(categoryArray);
      }
  })
})

// add buttons automatically to the button-container if array were being modified
// it will load when window loads
const btnsContainer = document.querySelector('.button-container')
function addingNewBtns(newBtn){
    newBtn = menu.reduce(function(value,item){
        if (!value.includes(item.category)){
            value.push(item.category)
        } return value
    },['all'])
    let displayMenu = newBtn.map(function(e){
        return`<button class="filter-btn" type="button" data-id=${e}>
        ${e}
        </button>`;
    })
    displayMenu = displayMenu.join('')
    btnsContainer.innerHTML = displayMenu;
}