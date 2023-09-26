const lobisomem = document.querySelector('.lobisomem')
const arbusto = document.querySelector('.arbusto')
const jump = () => {
    lobisomem.classList.add('jump');
    setTimeout(() => {
        lobisomem.classList.remove('jump');
    } ,500

    );
}

const loop = setInterval(() => {
    const arbustoPosition = arbusto.offsetLeft;
    const lobisomemPosition = +getComputedStyle(lobisomem).bottom.replace('px','');

    if (arbustoPosition <= 100 && arbustoPosition > 0 && lobisomemPosition < 70) {
        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        lobisomem.style.animation = 'none';
        lobisomem.style.bottom = `${lobisomemPosition}px`;

        lobisomem.src = "perdeu.png";

        clearInterval(loop);
    }

}
    , 10);

document.addEventListener('keydown', jump);

