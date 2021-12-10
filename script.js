let navDial = document.getElementById('navDial');
let showDial = document.getElementById('navActivator');

let button1 = document.getElementById('pageBtn1');
let button2 = document.getElementById('pageBtn2');
let button3 = document.getElementById('pageBtn3');
let button4 = document.getElementById('pageBtn4');
let button5 = document.getElementById('pageBtn5');
let button6 = document.getElementById('pageBtn6');
let button7 = document.getElementById('pageBtn7');

let vwprt = document.getElementById('iViewport');

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