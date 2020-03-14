// 蓋板廣告

let adOutBox = document.querySelector('#ad-content');
let ad = document.querySelector('#ad');

window.onload = function () {
    ad.style.display = " block";
}
function removeAD() {
    adOutBox.removeChild(ad);
}
setTimeout(removeAD, 1000);

// 簡易輪播
var poster = document.querySelector('#poster');
var pic = 1;
var timer;
function carousel() {
    if (pic < 4) {
        pic++;
    } else {
        pic = 1;
    }
    poster.src = "./assets/img/pasta/pasta0" + pic + ".jpg";
}
timer = setInterval(carousel, 2000);

// function docarousel() {
//     clearInterval(timer);
//     timer = setInterval(carousel, 1000); //
// }
// function stopcarousel() {
//     clearInterval(timer);
// }