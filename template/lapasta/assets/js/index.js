// 蓋板廣告
let adOutBox = document.querySelector('#ad-content');
let ad = document.querySelector('#ad');

window.onload = function () {
    ad.style.display = " block";
}
function removeAD() {
    adOutBox.removeChild(ad);
}
setTimeout(removeAD, 50000);
// 蓋板廣告BTN關閉紐
document.querySelector('#ad-btn').addEventListener('click', function () {
    ad.style.display = " none";
})


//登入框 與內建關閉按鈕
document.querySelector('#SignInBtn').addEventListener('click', function () {
    document.querySelector('#singin-box').style.display = "block";
});

document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#singin-box').style.display = " none";
})





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
