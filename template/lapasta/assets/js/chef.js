
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


 // if (name == 'chef01') {
    //     document.querySelector('#popover02').style.display = "none";
    //     document.querySelector('#popover01').style.display = "block";
    // } else if (name == 'chef02') {
    //     document.querySelector('#popover02').style.display = "block";
    //     document.querySelector('#popover01').style.display = "none";
    // } else {
    //     document.querySelector('#popover01').style.display = "none";
    //     document.querySelector('#popover02').style.display = "none";
    // }
    // e.preventDefault();