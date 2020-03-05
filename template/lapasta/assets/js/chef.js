
function showPopo(e) {

    let name = this.id;
    if (name == 'chef01') {
        document.querySelector('#popover02').style.display = "none";
        document.querySelector('#popover01').style.display = "block";
    } else if (name == 'chef02') {
        document.querySelector('#popover02').style.display = "block";
        document.querySelector('#popover01').style.display = "none";
    } else {
        document.querySelector('#popover01').style.display = "none";
        document.querySelector('#popover02').style.display = "none";
    }
    e.preventDefault();
}

for (let i = 1; i <= 2; i++) {
    document.querySelector('#chef0' + i).addEventListener('click', showPopo);
    document.querySelector('#popover-box-btn0' + i).addEventListener('click', showPopo);
}


