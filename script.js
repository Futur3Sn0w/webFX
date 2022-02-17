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
let button11 = document.getElementById('pageBtn11');

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

    document.body.style.backgroundColor = button1.style.backgroundColor;
}

function globalBtn(obj) {
    obj.appendChild(indic1);
    scBtn.innerHTML = obj.getAttribute('data-pageName');
    sctTitle.innerHTML = obj.getAttribute('data-pageName');

    vwprt.src = "subpages/" + obj.getAttribute("data-pageSrcName") + ".html";
    document.body.style.backgroundColor = obj.style.backgroundColor;

    document.title = "webFX | " + obj.getAttribute('data-pageName');

    if (obj.getAttribute("data-needsBlur") == "y"){
        scBlur.classList.add('visible')
    } else if (obj.getAttribute("data-needsBlur") == "n"){
        scBlur.classList.remove('visible')
    }

    if (obj.classList.contains("dmG")){
        darkSupport.style.backgroundColor = "var(--green)"
    } else if (obj.classList.contains("dmY")){
        darkSupport.style.backgroundColor = "var(--yellow)"
    } else if (obj.classList.contains("dmR")){
        darkSupport.style.backgroundColor = "var(--red)"
    }
}

/*

button1.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button2.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--yellow)";
    interactive.style.backgroundColor = "var(--green)";
}

button3.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--yellow)";
}

button4.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button5.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--yellow)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button6.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button7.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--red)";
}

button8.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--green)";
    mobileSupport.style.backgroundColor = "var(--green)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--green)";
}

button9.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--red)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button10.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--red)";
    mobileSupport.style.backgroundColor = "var(--yellow)";
    responsive.style.backgroundColor = "var(--red)";
    interactive.style.backgroundColor = "var(--green)";
}

button11.onclick = function() {
    globalBtn(this);

    darkSupport.style.backgroundColor = "var(--yellow)";
    mobileSupport.style.backgroundColor = "var(--red)";
    responsive.style.backgroundColor = "var(--green)";
    interactive.style.backgroundColor = "var(--green)";
}

*/