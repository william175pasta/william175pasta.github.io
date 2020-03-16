
function showBox(e) {

    for (var i = 1; i <= 2; i++) {
        document.querySelector('#boxList' + i).classList.remove('open')
        document.querySelector('#list' + i).classList.remove('topcolor')
        document.querySelector('#tap' + i).classList.remove('nowTab')
    }
    var n = this.id.substring(3)
    document.querySelector('#boxList' + n).classList.add('open')
    document.querySelector('#list' + n).classList.add('topcolor')
    document.querySelector('#tap' + n).classList.add('nowTab')
    e.preventDefault();
}
document.querySelector('#tap1').addEventListener('click', showBox);
document.querySelector('#tap2').addEventListener('click', showBox);


function showShopee(e) {
    document.querySelector('.shopee1').classList.remove('open');
    document.querySelector('.shopee2').classList.remove('open');
    var n = this.id.substring(9)
    if (n == 1) {
        document.querySelector('.shopee2').classList.add('open')
    } else if (n == 2) {
        document.querySelector('.shopee1').classList.add('open')
    }

    e.preventDefault();
}

document.querySelector('#shopeeBTN1').addEventListener('click', showShopee);
document.querySelector('#shopeeBTN2').addEventListener('click', showShopee);


