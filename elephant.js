let button;
let audio;

function preload() {
  // Load your audio file
  audio = loadSound('audios/hendon central - elephant shauna (1).mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a button
  button = createButton('click for a travel buddy!');
  button.position(width / 2 -150 , height / 2 );
  button.size(300, 150);
  button.mousePressed(playAudio);
}

function draw() {
  background(225,37,27);

  circle(width/2,height/2,450)
}

function playAudio() {
  // Play the audio when the button is clicked
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.play();
  }
}

function windowResized() {
  // Resize the canvas when the window is resized
  resizeCanvas(windowWidth, windowHeight);
}
