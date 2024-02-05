document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');

  // Example: Play audio when a button is clicked
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function () {
    audioPlayer.play();
  });

  // Example: Pause audio when another button is clicked
  const pauseButton = document.getElementById('pauseButton');
  pauseButton.addEventListener('click', function () {
    audioPlayer.pause();
  });

  // Add more functionality as needed
});
