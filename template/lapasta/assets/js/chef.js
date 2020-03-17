
function showPopo(e) {
    let name = this.id.substring(5);
    let box1 = document.querySelector('#popover01');
    let box2 = document.querySelector('#popover02');
    let box3 = document.querySelector('#popover03');
    let box4 = document.querySelector('#popover04');
    let box5 = document.querySelector('#popover05');

    switch (name) {
        case '1':
            box1.style.display = "block";
            break;
        case '2':
            box2.style.display = "block";
            break;
        case '3':
            box3.style.display = "block";
            break;
        case '4':
            box4.style.display = "block";
            break;
        case '5':
            box5.style.display = "block";
            break;
        default:
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
    }
}
for (let i = 1; i <= 5; i++) {
    document.querySelector('#chef0' + i).addEventListener('click', showPopo);
    document.querySelector('#popover-box-btn0' + i).addEventListener('click', showPopo);
}

//登入框 與內建關閉按鈕
document.querySelector('#SignInBtn').addEventListener('click', function () {
    document.querySelector('#singin-box').style.display = "block";
});

document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#singin-box').style.display = " none";
})