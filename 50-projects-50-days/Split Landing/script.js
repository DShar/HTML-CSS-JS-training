let blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.classList.add('scale');
    });

    block.addEventListener('mouseleave', () => {
        block.classList.remove('scale');
    })
})