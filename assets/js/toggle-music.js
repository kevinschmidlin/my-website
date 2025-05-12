// Get elements
const audio = document.getElementById('background-music');
const volumeIcon = document.getElementById('volume-icon');
const musicButton = document.getElementById('toggle-music');

// Initial setup
audio.volume = 0.3;
let isPlaying = false;

// Toggle music on button click
musicButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        volumeIcon.src = '/assets/icons/volume-xmark-solid.svg'; // Volume off
    } else {
        audio.play();
        volumeIcon.src = '/assets/icons/volume-high-solid.svg'; // Volume on
    }
    isPlaying = !isPlaying;
});
