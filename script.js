let circle = document.getElementById('circle');
let tvShine = document.getElementById('shine');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  tvShine.style.left = e.pageX + 'px';
  tvShine.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

document.getElementById('pageBtn1').style.backgroundColor = "rgb(210, 190, 219)";
document.getElementById('pageBtn2').style.backgroundColor = '#b6d8ee';
document.getElementById('pageBtn3').style.backgroundColor = '#f3b5b0';
document.getElementById('pageBtn4').style.backgroundColor = '#fadfac';
document.getElementById('pageBtn5').style.backgroundColor = 'rgb(254, 198, 184)';
document.getElementById('pageBtn6').style.backgroundColor = 'rgb(179, 205, 195)';
document.getElementById('pageBtn7').style.backgroundColor = 'rgb(232, 247, 159)';


let navDial = document.getElementById('navDial');
let showDial = document.getElementById('navActivator');

let button1 = document.getElementById('pageBtn1');
let button2 = document.getElementById('pageBtn2');
let button3 = document.getElementById('pageBtn3');
let button4 = document.getElementById('pageBtn4');
let button5 = document.getElementById('pageBtn5');
let button6 = document.getElementById('pageBtn6');
let button7 = document.getElementById('pageBtn7');

let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let page6 = document.getElementById('page6');
let page7 = document.getElementById('page7');

navDial.onclick = function () {
    navDial.style.opacity = "0";
    navDial.style.transform = "scale(.7) translateY(20%)"
}

showDial.onclick = function () {
    navDial.style.opacity = "1"
    navDial.style.transform = "scale(1) translateY(0)"
}

button1.onclick = function() {
    page1.style.display = "flex";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "1");
}

button2.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "2");
}

button3.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "flex";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "3");
}

button4.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "flex";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "4");
}

button5.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "flex";
    page6.style.display = "none";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "5");
}

button6.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "flex";
    page7.style.display = "none";

    document.getElementById('navActivator').setAttribute("data-pageNo", "6");
}

button7.onclick = function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "flex";

    document.getElementById('navActivator').setAttribute("data-pageNo", "7");
}