function changeMessage() {
    document.getElementById("messageText").textContent = "You're a superherooo🎉";
}
function celebrate({count = 30} = {}) {
    const maxNew = Math.min(count, 60);
    for (let i = 0; i < maxNew; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 32) + 'px';
    heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    heart.style.animationDuration = (2200 + Math.random() * 1800) + 'ms';
    heart.style.animationDelay = Math.random() * 250 + 'ms';
    heart.style.transform = `translateY(0) rotate(${Math.random() * 45 - 22}deg)`;

    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove());
    setTimeout(() => { if (heart.parentNode) heart.remove(); }, 6000);
}
