// Vars

let navDial = document.getElementById('navDial');
let showDial = document.getElementById('navActivator');

let button1 = document.getElementById('pageBtn1');
let button2 = document.getElementById('pageBtn2');
let button3 = document.getElementById('pageBtn3');
let button4 = document.getElementById('pageBtn4');
let button5 = document.getElementById('pageBtn5');
let button6 = document.getElementById('pageBtn6');
let button7 = document.getElementById('pageBtn7');

let button = document.querySelector('.pnBtn');

let vwprt = document.getElementById('iViewport');

let infoMenu = document.getElementById('infoMenu');

// NavDial Buttons

navDial.onclick = function () {
    navDial.style.opacity = "0";
    navDial.style.transform = "scale(0) translateY(50%)"
}

showDial.onclick = function () {
    navDial.style.opacity = "1";
    navDial.style.transform = "scale(1) translateY(0)"
}

button1.onclick = function() {
    vwprt.src = "subpages/page1.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "1");
}

button2.onclick = function() {
    vwprt.src = "subpages/page2.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "2");
}

button3.onclick = function() {
    vwprt.src = "subpages/page3.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "3");
}

button4.onclick = function() {
    vwprt.src = "subpages/page4.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "4");
}

button5.onclick = function() {
    vwprt.src = "subpages/page5.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "5");
}

button6.onclick = function() {
    vwprt.src = "subpages/page6.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "6");
}

button7.onclick = function() {
    vwprt.src = "subpages/page7.html";

    document.getElementById('navActivator').setAttribute("data-pageNo", "7");
}

// Right-click menu

window.addEventListener('click', function () {
    infoMenu.style.opacity = "0";
    infoMenu.style.transform = "scale(0)";
}, false);

window.addEventListener('contextmenu', function (e) { 
    infoMenu.style.opacity = "1";
    infoMenu.style.transform = "scale(1)";
    infoMenu.style.left = e.pageX + 'px';
    infoMenu.style.top = e.pageY + 'px';
    e.preventDefault(); 
  }, false);

// Right-click specs

let darkSupport = document.getElementById('darkSupport');
let mobileSupport = document.getElementById('mobileSupport');
let responsive = document.getElementById('responsive');
let interactive = document.getElementById('interactive');

button1.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button2.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--yellow)";
    interactive.style.backgroundColor = "var(--green)";
}

button3.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--yellow)";
}

button4.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button5.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--yellow)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button6.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button7.oncontextmenu = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}