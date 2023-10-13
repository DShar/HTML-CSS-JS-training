let btnSearch = document.getElementById('search-button');
let search = document.getElementById('search');
let input = document.getElementById('search-input');

btnSearch.onclick = function () {
    search.classList.toggle('active');
    input.focus();
}