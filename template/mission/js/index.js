

function showbox() {
    var id = this.id;
    if (id == 'box01') {
        document.querySelector('#box1').classList.remove('close')
        document.querySelector('#box2').classList.add('close');
    } else if (id == 'box02') {
        document.querySelector('#box1').classList.add('close')
        document.querySelector('#box2').classList.remove('close');
    } else if (id == 'box03') {
        document.querySelector('#box2').classList.add('close');
        document.querySelector('#box1').classList.remove('close');
        var user = document.querySelectorAll('.golduser');
        user[0].style.color = "#DDDDDD";
        user[1].style.color = "#DDDDDD";
    } else if (id == 'box04') {
        var user = document.querySelectorAll('.golduser');
        user[0].style.color = "red";
        user[1].style.color = "red";
    }

}
for (var i = 1; i <= 4; i++) {
    document.querySelector('#box0' + i).addEventListener('click', showbox);
}

function goldusers() {
    var id = this.id;
    if ((document.querySelector('#gold01').style.color == 'red')
        &&
        (id == "gold01")) {
        alert('黃金會員還要儲值500元!')
    } else if ((document.querySelector('#gold02').style.color == 'red')
        &&
        (id == "gold02")) {
        alert('黃金會員還要儲值5000元!')
    } else {
        alert('erro')
    }
}

document.querySelector('#gold01').addEventListener('click', goldusers)
document.querySelector('#gold02').addEventListener('click', goldusers)
