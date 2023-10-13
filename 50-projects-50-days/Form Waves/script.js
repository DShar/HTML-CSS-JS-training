let labels = document.querySelectorAll('.form__input-label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((l, idx) =>
            `<span style="transition-delay: ${idx * 50}ms">${l}</span>`)
        .join('');
})