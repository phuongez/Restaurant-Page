function About(){
    const contentContainer = document.getElementById("content");
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-us");
    const background = document.createElement("div");
    background.classList.add("filter");
    const textContainer = document.createElement("div");
    textContainer.classList.add("about-us-text");
    const text = document.createElement("p");
    text.textContent = "We're more than just coffee. Our coffee shop is a place where friends gather, ideas flourish, and new memories are made. Our cozy ambiance and warm hospitality make every visit a special experience. We host a variety of events, from live music nights to community workshops, aiming to bring people together and foster a sense of belonging. As we continue to grow, our mission remains the same: to bring joy and comfort through exceptional coffee and a welcoming atmosphere. We invite you to join us, to savor the flavors, and to be part of our ever-growing coffee family.";
    textContainer.appendChild(text);
    aboutContainer.appendChild(background);
    aboutContainer.appendChild(textContainer);
    contentContainer.appendChild(aboutContainer);
}

export {About};