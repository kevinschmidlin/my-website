const audio = document.getElementById('background-music');
let isPlaying = false;

// Set initial button state
const musicButton = document.getElementById('toggle-music');
musicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Default state: volume off

musicButton.addEventListener('click', function () {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        musicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Volume off
    } else {
        audio.play();
        isPlaying = true;
        musicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Volume high
    }
});
