window.onload = function expandCards() {
    let cards = document.querySelectorAll('.card');

    console.log(1);

    cards.forEach(card => {
        console.log(2);
        card.addEventListener('click', () => {
            removeActiveClasses()
            card.classList.add('active')
        })
    });

    function removeActiveClasses() {
        console.log(3);
        cards.forEach(card => {
            card.classList.remove('active');
        })
    }
}

