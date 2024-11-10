const audio = document.getElementById('background-music');
audio.volume = 0.1;
let isPlaying = false;

document.getElementById('toggle-music').addEventListener('click', function () {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        this.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        audio.play();
        isPlaying = true;
        this.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});