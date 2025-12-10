// JavaScript Document
console.log("hi");

/***************/
/* toggle menu */
/***************/
var menu = document.querySelector("header > button");
var menu_image = document.querySelector("header > button > img");
var nav = document.querySelector("header > nav");
var body = document.querySelector("body");

menu.onclick = toonMenu;

function toonMenu() {
    nav.classList.toggle("toonMenu");
    body.classList.toggle("noscroll");

    if (menu.ariaLabel.endsWith("Open collapsible menu")) {
        menu.ariaLabel = "Close collapsible menu";
    } else {
        menu.ariaLabel = "Open collapsible menu";
    }

    if (menu_image.src.endsWith("settings-white.jpg")) {
        menu_image.src = "/images/Icons/close-white.jpg";
    } else {
        menu_image.src = "/images/Icons/settings-white.jpg";
    }
}
