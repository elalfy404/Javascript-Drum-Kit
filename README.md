# Javascript Drum Kit

```Javascript

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

```

## Play music by mouse click

```Javascript

keys.forEach(key => key.addEventListener('click', playByMouse));
function playByMouse(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
};

```
[Live](https://elalfy404.github.io/Javascript-Drum-Kit/)
