var html_style_night = `
 
#toggle{
    -webkit-appearance: none;
    appearance: none;
    height: 40px;
    width: 75px;
    background-color: #15181f;
    position: absolute;
    right: -80px;
    top: 12px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
}
#toggle:after{
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    top: 5px;
    left: 7px;
    border-radius: 50%;
}
.dark-theme #toggle{
    background-color: #ffffff;
}
.dark-theme #toggle:after{
    background-color: transparent;
    box-shadow: 10px 10px #15181f;
    top: -4px;
    left: 30px;
}
`;
var html_style_light = `
 .text-muted {
   color: #90cde7!important;
}
`;
var html_style = `
  body{
background-color: #000000!important;
}
.nav-v2 {
    background-color: #040b0e!important;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #63b7dd!important;
} 
.up-sidebar {
    background-color: #040b0e!important;
color: #ffffff!important;
}

.up-card-section:not(:last-child):not(.p-0) {
    border-bottom: 1px solid #143442!important;
}
.up-card-footer, .up-card-header {
    background-color: #040b0e!important;
}
.up-card {
color: #fffff0!important;
   background-color: #000000!important;
border: 1px solid #040b0e!important;
}
.up-slider-content {
    background: #000000!important;
}
.up-slider-header {
    background: #0e2933!important;
}
.up-card-visited {
    background-color: #080808!important;
}
html[theme=air-2-75-user] .up-footer {
    --footer-color: #bdbdbd!important;
    --footer-bg: #000!important;
}
.up-btn.up-dropdown-toggle:not(.up-btn-circle):not([disabled]) {
color: #fffff0!important;
    background-color: #000!important;
}
.up-input {
    background-color: #000!important;
}
.up-image-upload {
    background: #000000!important;
    color: #ffffff!important;
}
.up-footer-social .up-footer-social-list-link {
    color: var(--footer-color);
    background: #000000!important;
}
.up-skill-badge {
    color: #ffffff!important;
    background-color: #1d4354!important;
}
.up-alert:not(.up-alert-notification) {
    background-color: #040b0e!important;
    color: #ffffff!important;
}
.announcements-empty[data-v-2f84438b] {
    background-color: #040b0e!important;
}
.up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
    background-color: #1d4354!important;
}

@media (hover: hover){
.up-card-section.up-card-hover:focus-within, .up-card-section.up-card-hover:hover {
    background-color: #040b0e!important;
}
h2#ALREADYREAD span {
    background-color: #040b0e!important;
}
}
.up-btn-default {
    background-color: #040b0e!important;
}
.up-badge:not(.up-badge-tagline):not(.up-badge-flag).up-badge-rounded-inverse {
color: #ffffff!important;
    background: #1d4354!important;
}
h2#ALREADYREAD span {
    background-color: black!important;
}
.up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
    background-color: #1d4354!important;
}
.popper>div .popper-wrapper {
    background-color: #000!important;
}
.popper>div .popper-inner {
    background-color: #000!important;
}
.up-tab-scroll-hint:after {
    display:none!important;
}
.up-menu-list .up-menu-item:hover {
    background-color: #000000!important;
}
.up-menu-list .up-menu-item.focused-menu {
    color: #fff!important;
}
.up-menu-list li.up-dropdown-menu-header {
color: #fff!important;
    background-color: #040b0e!important;
}
.up-menu-list .up-menu-item {
   color: #fff!important;
    background-color: #040b0e!important;
}
.text-muted {
   color: #90cde7!important;
}
`;


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function theme_time() {
    var needElement = document.getElementsByClassName('nav-right');
    needElement[0].innerHTML +='<li><div class="night"><input type="checkbox" id="toggle"></div> </li>';

    document.head.innerHTML +='<link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">';


    var added_dark = document.createElement('style');
    added_dark.appendChild(document.createTextNode(html_style_night));
    document.head.appendChild(added_dark);


    var theme = getCookie('theme');
    if(theme=="dark"){
        document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
        document.head.innerHTML +='<style id="night">' + html_style + '</style>';
    }
    console.log(theme);

    document.getElementById("toggle").addEventListener("click", function(){
        document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            document.head.innerHTML +='<style id="night">' + html_style + '</style>';
            document.cookie = "theme=dark";
        }else{
            document.cookie = "theme=light";
            document.getElementById("night").remove();
            document.getElementById("light").remove();
        }
    });
    console.log("dssark");
    var theme = getCookie('theme');
    if(theme=="dark"){
        document.head.innerHTML +='<style id="light">' + html_style_light + '</style>';
        console.log("dssark");
    }
};
setTimeout(theme_time, 2000);

