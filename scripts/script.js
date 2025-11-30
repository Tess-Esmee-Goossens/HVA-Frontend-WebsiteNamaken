// JavaScript Document
console.log("hi");

/***************/
/* toggle menu */
/***************/
var menu = document.querySelector("header > button");
var nav = document.querySelector("header > nav");
var body = document.querySelector("body");

menu.onclick = toonMenu;

function toonMenu() {
    nav.classList.toggle("toonMenu");
    body.classList.toggle("noscroll");
}
