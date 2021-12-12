// Vars

let navDial = document.getElementById('navDial');

let button1 = document.getElementById('pageBtn1');
let button2 = document.getElementById('pageBtn2');
let button3 = document.getElementById('pageBtn3');
let button4 = document.getElementById('pageBtn4');
let button5 = document.getElementById('pageBtn5');
let button6 = document.getElementById('pageBtn6');
let button7 = document.getElementById('pageBtn7');

let button = document.querySelector('.pnBtn');

let vwprt = document.getElementById('iViewport');

let scBtn = document.getElementById('scBtn');
let sctTitle = document.getElementById('sctTitle');

let darkSupport = document.getElementById('darkSupport');
let mobileSupport = document.getElementById('mobileSupport');
let responsive = document.getElementById('responsive');
let interactive = document.getElementById('interactive');

// NavDial Buttons

window.onload = function () {
    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my1');
}

button1.onclick = function() {
    vwprt.src = "subpages/page1.html";

    scBtn.innerHTML = button1.getAttribute('data-pageName');
    sctTitle.innerHTML = button1.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my1');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button2.onclick = function() {
    vwprt.src = "subpages/page2.html";

    scBtn.innerHTML = button2.getAttribute('data-pageName');
    sctTitle.innerHTML = button2.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my2');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--yellow)";
    interactive.style.backgroundColor = "var(--green)";
}

button3.onclick = function() {
    vwprt.src = "subpages/page3.html";

    scBtn.innerHTML = button3.getAttribute('data-pageName');
    sctTitle.innerHTML = button3.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my3');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--yellow)";
}

button4.onclick = function() {
    vwprt.src = "subpages/page4.html";

    scBtn.innerHTML = button4.getAttribute('data-pageName');
    sctTitle.innerHTML = button4.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my4');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button5.onclick = function() {
    vwprt.src = "subpages/page5.html";

    scBtn.innerHTML = button5.getAttribute('data-pageName');
    sctTitle.innerHTML = button5.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my5');

    darkSupport.style.backgroundColor = "var(--yellow)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button6.onclick = function() {
    vwprt.src = "subpages/page6.html";

    scBtn.innerHTML = button6.getAttribute('data-pageName');
    sctTitle.innerHTML = button6.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my6');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button7.onclick = function() {
    vwprt.src = "subpages/page7.html";

    scBtn.innerHTML = button7.getAttribute('data-pageName');
    sctTitle.innerHTML = button7.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my7');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}