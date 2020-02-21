


function openBox() {
    var n = this.id.substring(6);
    document.querySelector('#box-' + n).classList.toggle('box-open')
}

document.querySelector('#title_1').addEventListener('click', openBox);
document.querySelector('#title_2').addEventListener('click', openBox);
document.querySelector('#title_3').addEventListener('click', openBox);
