// Vars

let navDial = document.getElementById('navDial');

let button1 = document.getElementById('pageBtn1');
let button2 = document.getElementById('pageBtn2');
let button3 = document.getElementById('pageBtn3');
let button4 = document.getElementById('pageBtn4');
let button5 = document.getElementById('pageBtn5');
let button6 = document.getElementById('pageBtn6');
let button7 = document.getElementById('pageBtn7');
let button8 = document.getElementById('pageBtn8');
let button9 = document.getElementById('pageBtn9');
let button10 = document.getElementById('pageBtn10');

let indic1 = document.getElementById('pni1');

let button = document.querySelector('.pnBtn');

let vwprt = document.getElementById('iViewport');

let scBtn = document.getElementById('scBtn');
let sctTitle = document.getElementById('sctTitle');
let scBlur = document.getElementById('scBlurberry');

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

    button1.appendChild(indic1);

    scBtn.innerHTML = button1.getAttribute('data-pageName');
    sctTitle.innerHTML = button1.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my1');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";

    scBlur.classList.remove('visible');
}

button2.onclick = function() {
    vwprt.src = "subpages/page2.html";

    button2.appendChild(indic1);

    scBtn.innerHTML = button2.getAttribute('data-pageName');
    sctTitle.innerHTML = button2.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my2');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--yellow)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.remove('visible');
}

button3.onclick = function() {
    vwprt.src = "subpages/page3.html";

    button3.appendChild(indic1);

    scBtn.innerHTML = button3.getAttribute('data-pageName');
    sctTitle.innerHTML = button3.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my3');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--yellow)";

    scBlur.classList.remove('visible');
}

button4.onclick = function() {
    vwprt.src = "subpages/page4.html";

    button4.appendChild(indic1);

    scBtn.innerHTML = button4.getAttribute('data-pageName');
    sctTitle.innerHTML = button4.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my4');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.remove('visible');
}

button5.onclick = function() {
    vwprt.src = "subpages/page5.html";

    button5.appendChild(indic1);

    scBtn.innerHTML = button5.getAttribute('data-pageName');
    sctTitle.innerHTML = button5.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my5');

    darkSupport.style.backgroundColor = "var(--yellow)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.remove('visible');
}

button6.onclick = function() {
    vwprt.src = "subpages/page6.html";

    button6.appendChild(indic1);

    scBtn.innerHTML = button6.getAttribute('data-pageName');
    sctTitle.innerHTML = button6.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my6');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";

    scBlur.classList.remove('visible');
}

button7.onclick = function() {
    vwprt.src = "subpages/page7.html";

    button7.appendChild(indic1);

    scBtn.innerHTML = button7.getAttribute('data-pageName');
    sctTitle.innerHTML = button7.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my7');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";

    scBlur.classList.remove('visible');
}

button8.onclick = function() {
    vwprt.src = "subpages/page8.html";

    button8.appendChild(indic1);

    scBtn.innerHTML = button8.getAttribute('data-pageName');
    sctTitle.innerHTML = button8.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my7');

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.remove('visible');
}

button9.onclick = function() {
    vwprt.src = "subpages/page9.html";

    button9.appendChild(indic1);

    scBtn.innerHTML = button9.getAttribute('data-pageName');
    sctTitle.innerHTML = button9.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my3');

    darkSupport.style.backgroundColor = "var(--red)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.remove('visible');
}

button10.onclick = function() {
    vwprt.src = "subpages/page10.html";

    button10.appendChild(indic1);

    scBtn.innerHTML = button10.getAttribute('data-pageName');
    sctTitle.innerHTML = button10.getAttribute('data-pageName');

    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my6');

    darkSupport.style.backgroundColor = "var(--red)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";

    scBlur.classList.add('visible');
}