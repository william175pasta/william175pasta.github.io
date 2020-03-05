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