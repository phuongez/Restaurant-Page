import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

Home();

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener('click',() => {
    document.getElementById("content").innerHTML = "";
    Menu();
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener('click',() => {
    document.getElementById("content").innerHTML = "";
    About();
})

const homeBtn = document.getElementById("home");
homeBtn.addEventListener('click',() => {
    document.getElementById("content").innerHTML = "";
    Home();
})