import Background from './imgs/menu-background.jpeg'
import CoffeeIcon from './imgs/coffee logo.svg'

function Menu(){
    const contentContainer = document.getElementById("content");
    const container = document.createElement("div");
    container.classList.add("menu-container")
    // container.innerHTML = `<img src="./imgs/menu-background.jpg" alt="">`
    const backgroundImg = document.createElement("img")
    backgroundImg.src = Background;
    const menu = document.createElement("div");
    menu.classList.add("coffee-menu");
    const coffeeIcon = document.createElement("img");
    coffeeIcon.src = CoffeeIcon;
    const headLine = document.createElement("h1");
    headLine.textContent = "Coffee Menu";
    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = `
        <p>Americano</p>
        <p>$6.00</p>
        <p>Espresso</p>
        <p>$6.00</p>
        <p>Cappuccino</p>
        <p>$8.00</p>
        <p>Latte</p>
        <p>$6.50</p>
        <p>Macchiato</p>
        <p>$7.50</p>
        <p>Black Coffee</p>
        <p>$4.35</p>
        <p>Hot Chocolate</p>
        <p>$4.00</p>
    `;
    menu.appendChild(headLine);
    menu.appendChild(productPrice);
    container.appendChild(backgroundImg);
    container.appendChild(menu);
    contentContainer.appendChild(container);
}

export {Menu};