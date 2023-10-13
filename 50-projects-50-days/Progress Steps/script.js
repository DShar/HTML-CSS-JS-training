let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
let progressLine = document.getElementById('progress-line');
let circles = document.getElementsByClassName('circle');
let activeCircle = 1;

btnPrev.onclick = function () {
    activeCircle--;
    circles[activeCircle].classList.remove('active');

    progressLine.style.width = (activeCircle - 1) / (circles.length - 1) * 100 + '%';

    if(activeCircle < circles.length) {
        btnNext.disabled = false;
    }
    if(activeCircle === 1) {
        btnPrev.disabled = true;
    }
}

btnNext.onclick = function () {
    activeCircle++;
    circles[activeCircle - 1].classList.add('active');

    progressLine.style.width = (activeCircle - 1) / (circles.length - 1) * 100 + '%';

    if(activeCircle > 1) {
        btnPrev.disabled = false;
    }
    if(activeCircle === circles.length) {
        btnNext.disabled = true;
    }

}