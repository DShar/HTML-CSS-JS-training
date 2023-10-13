let btnOpen = document.getElementById('btn-open');
let btnClose = document.getElementById('btn-close');
let container = document.getElementsByClassName('container')[0];

btnOpen.onclick = function () {
    container.classList.add('show-nav');
}

btnClose.onclick = function () {
    container.classList.remove('show-nav')
}