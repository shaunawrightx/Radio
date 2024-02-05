function setup() {
    background(200);
  
    // Create a button and place it beneath the canvas.
    let button = createButton('click me');
    button.position(0, 100);
  
    // Use the button to change the background color.
    button.mousePressed(() => {
      let g = random(255);
      background(g);
    });
}