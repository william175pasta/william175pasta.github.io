
(function changeFontSize() {

    let big_open = false;
    let mid_open = false;
    let samll_open = false;
    let content = document.querySelector('#content');

    function toBig() {
        if (big_open == false) {
            content.style.fontSize = '20px';
            big_open = true;
        } else {
            content.style.fontSize = '14px';
            big_open = false;
        }
    }
    function toMid() {
        if (mid_open == false) {
            content.style.fontSize = '16px';
            mid_open = true;
        } else {
            content.style.fontSize = '14px';
            mid_open = false;
        }
    }
    function toSmall() {
        if (samll_open == false) {
            content.style.fontSize = '12px';
            samll_open = true;
        } else {
            content.style.fontSize = '14px';
            samll_open = false;
        }
    }
    document.querySelector('#big').addEventListener('click', toBig);
    document.querySelector('#mid').addEventListener('click', toMid);
    document.querySelector('#small').addEventListener('click', toSmall);
})()
