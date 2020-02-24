window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


// Play music by mouse click
keys.forEach(key => key.addEventListener('click', playByMouse));
function playByMouse(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
};

