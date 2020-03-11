// 改變menu 顯示 哪一個區塊
function showMainBox(e) {
    for (var i = 0; i < 8; i++) {
        document.querySelector('#mainBar0' + i).classList.remove('openmainBar')
    }
    var n = this.id.substring(5);
    document.querySelector('#mainBar0' + n).classList.add('openmainBar')
    e.preventDefault();
}

for (var i = 0; i < 8; i++) {
    document.querySelector('#menu0' + i).addEventListener('click', showMainBox);
}
