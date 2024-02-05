let button;
 let audio;

 function preload(){
    audio = loadSound('audios/Hendon - tottenham court road shauna (1).mp3');
 }
 
function setup() {
    createCanvas(windowWidth,windowHeight);


button = createButton('click for a travel buddy');
  button.position((width/2)-200,(height/2)-100);
  button.size(400,200);
  button.mousePressed(playAudio);
}

function draw(){
    background(0,121,52);
}

function playAudio() {
  
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
  }


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
