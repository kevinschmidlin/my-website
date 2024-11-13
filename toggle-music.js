// Get the audio element and set the initial volume
const audio = document.getElementById('background-music');
let isPlaying = false;

// Get the music button
const musicButton = document.getElementById('toggle-music');

// Set up the click event listener for toggling music
musicButton.addEventListener('click', function () {
    if (isPlaying) {
        // Pause the music and update the button icon
        audio.pause();
        isPlaying = false;
        musicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Volume off
    } else {
        // Play the music and update the button icon
        audio.play();
        isPlaying = true;
        musicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Volume high
    }
});
