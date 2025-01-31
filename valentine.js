document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('mouseover', () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;
        const maxX = bodyWidth - buttonWidth;
        const maxY = bodyHeight - buttonHeight;
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});