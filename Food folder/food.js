//array declaring object names and prices
const foodItems = [
    {
        name: 'Quasadillas',
        price: 10.50
    },
    {
        name: 'Huevos rancheros',
        price: 9.40
    },
    {
        name: 'Spicy bean taco bowl',
        price: 11.00
    },
    {
        name: 'Elote',
        price: 5.60
    },
    {
        name: 'Sopa De Lima',
        price: 5.99
    },
    {
        name: 'Tamales',
        price: 6.90
    },
    {
        name: 'Plátanos Fritos',
        price: 10.30
    },
    {
        name: 'Coyotas',
        price: 4.60
    },
    {
        name: 'Jamoncillo',
        price: 5.00
    },
];


let basket = [];

// create button for side menu items
const starterButton = document.getElementById("starters-menu");
const mainsButton = document.getElementById("mains-menu");
const dessertsButton = document.getElementById("desserts-menu");
const topMenuButton = document.getElementById("top-menu")

// variables to be used in event listener to style.
const mainItemsMenuView = document.getElementById('Mains')
const startersItemsMenuView = document.getElementById('starters')
const dessertItemsMenuView = document.getElementById('Desserts')
const topMenuView = document.getElementById('Main', 'starters', 'Dessert')

//when clicking side menu tites, display filters by course
starterButton.addEventListener('click', () => {
    startersItemsMenuView.style.display = 'inline-block';
    mainItemsMenuView.style.display = 'none';
    dessertItemsMenuView.style.display = 'none'
})

mainsButton.addEventListener('click', () => {
    startersItemsMenuView.style.display = 'none';
    mainItemsMenuView.style.display = 'inline-block';
    dessertItemsMenuView.style.display = 'none'
})

dessertsButton.addEventListener('click', () => {
    startersItemsMenuView.style.display = 'none';
    mainItemsMenuView.style.display = 'none';
    dessertItemsMenuView.style.display = 'inline-block';
})

topMenuButton.addEventListener('click', () => {
    startersItemsMenuView.style.display = 'inline-block';
    mainItemsMenuView.style.display = 'inline-block';
    dessertItemsMenuView.style.display = 'inline-block';
})

//iterate through variable to fid item price
function getPrice(foodItems, itemName) {
    for (var i = 0; i < foodItems.length; i++) {
        if (foodItems[i].name === itemName) {
            return foodItems[i];
        }
    }
}

//add item to basket array
function addItem(item, basket) {
    return basket.concat(item);
};

//place to store total price for basket 
function getTotal(basket) {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        total = basket[i].price + total;
    }
    return total;
}

const addToBasketElements = document.querySelectorAll(".addToBasket");
console.log(addToBasketElements);


const ul = document.getElementById('basketList');

//looping through basket and adding items to basket list and displaying total.
addToBasketElements.forEach(element => {
    element.addEventListener("click", (e) => {
        const id = e.currentTarget.id;
        const getPriceBasket = getPrice(foodItems, id);
        basket = addItem(getPriceBasket, basket);
        const getTotalBasket = getTotal(basket);
        const li = document.createElement('li');
        li.textContent = `${getPriceBasket.name} - £${getPriceBasket.price.toFixed(2)}`;
        ul.appendChild(li);
        const basketTotalOnPage = document.getElementById('basketTotal');
        basketTotalOnPage.innerText= `Total £ ${getTotalBasket.toFixed(2)}`;
    });
});
