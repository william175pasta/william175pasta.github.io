
function fontSizeCH() {
    let name = this.id;
    let content = document.querySelector('#informationBox');
    if (name == "big") {
        content.style.fontSize = '28px';
    } else if (name == "mid") {
        content.style.fontSize = '20px';
    } else {
        content.style.fontSize = '12px';
    }
    e.preventDefault();
}
document.querySelector('#big').addEventListener('click', fontSizeCH);
document.querySelector('#mid').addEventListener('click', fontSizeCH);
document.querySelector('#small').addEventListener('click', fontSizeCH);
