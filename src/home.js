function Home() {
    const contentContainer = document.getElementById("content");
    const homeText = document.createElement("div");
    homeText.classList.add("home-text")
    const smallText = document.createElement("p");
    smallText.textContent = "Now you can feel the energy";
    const largeText = document.createElement("h1");
    largeText.textContent = "Start your day with a milk coffee";
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy Now";

    homeText.appendChild(smallText);
    homeText.appendChild(largeText);
    homeText.appendChild(buyBtn);

    contentContainer.appendChild(homeText);
}

export {Home}


