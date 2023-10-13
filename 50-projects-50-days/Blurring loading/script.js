let loadScore = 0;
let loadText = document.getElementById('loading');
let bgPicture = document.getElementById('bg');
let interval = setInterval(loading, 25);

function loading() {
    loadScore++;

    if(loadScore === 100) {
        clearInterval(interval);
    }

    bgPicture.style.filter = `blur(${scale(loadScore, 0, 100, 50, 0)}px)`;
    loadText.style.opacity = `${scale(loadScore, 0, 100, 0.2, 1)}`
    loadText.innerText = `${loadScore}%`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};