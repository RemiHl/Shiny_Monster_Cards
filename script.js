const card = document.querySelector('.card');
const cardBackground = document.querySelector('.card-background');
const cardImage = document.querySelector('.card-image img'); 

const rows = 7;
const cols = 5;

card.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = (x - centerX) / 10; 
    const deltaY = (y - centerY) / 10;

    card.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;

    const brightness = 1 + (Math.max(0, 1 - Math.sqrt(deltaX ** 2 + deltaY ** 2) / 20) * 0.4);
    cardImage.style.filter = `brightness(${brightness})`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
    card.style.setProperty('--mouse-x', `50%`);
    card.style.setProperty('--mouse-y', `50%`);

    cardImage.style.filter = 'brightness(1)';
});