let blocks = document.querySelectorAll('.block');

window.addEventListener("scroll", () => {
    showBlock();
});

showBlock();

function showBlock() {
    let bottomLineShow = window.innerHeight * 0.8;

    blocks.forEach((block) => {
        let rect = block.getBoundingClientRect().top;

        if(rect < bottomLineShow) {
            block.classList.add('show');
        } else {
            block.classList.remove('show');
        }
    })
}