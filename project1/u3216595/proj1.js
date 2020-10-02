function setup(){
    createCanvas(600, 1000); //create canvas to draw on
    background(250); //temp baby blue or green later
}

function draw(){
    //neck
    fill(244, 227, 182); //fill closed shape with colour. slightly darker than face skin tone.
    noStroke(); //erase border line until otherwise stated
    rect(250, 350, 100, 200); //x, y, width, height
    
    //face
    fill(255, 241, 202);
    ellipse(300, 300, 400, 400); //x, y, width, height

    //eyes
    //left
    stroke(195, 164, 79); //strokes appear again
    strokeWeight(1); //how thick strokes are
    fill(255); //255 is topmost value, this means the colour is white - 255, 255, 255 in rgb
    ellipse(205, 290, 135, 135);
    //right
    fill(255);
    ellipse(395, 290, 135, 135); //x = 600-215

    //pupils
    //left
    fill(0); //black would be the bottommost value if white was topmost - 0, 0, 0 in rgb
    noStroke();
    ellipse(205, 290, 80, 80);
    //right
    fill(0);
    ellipse(395, 290, 80, 80);

    /*6. shirt
    colour black
    ellipse on right of neck
    colour black
    ellipse on left of neck
    colour black
    create rect
    enlargen so it is ude for both arms
    colour black 
    create rect
    links both shoulders together
    colour black
    create rect
    turtle neck so I don't need shirt collar*/
    //shirt
    //left shoulder
    fill(0);
    ellipse();
    //right shoulder
    fill(0);
    ellipse();
    //arms and torso
    fill(0);
    rect();
    //connect shoulders
    fill(0);
    rect();
    //turtle neck
    fill(0);
    rect();

    /*8. eyebrows
    create arc
    position above left eye
    create arc
    position above right eye*/
    //eyebrows
    stroke(195, 164, 79);
    arc(205, 210, 50, 50, PI + TWO_PI, TWO_PI);;//left
    arc(395, 210, 50, 50, PI + TWO_PI, TWO_PI);;//right

    /*9. ears
    skin tone
    ellipse left of head
    skin tone
    ellipse right of head*/
    //ears
    noStroke();
    fill(0);
    ellipse(); //left
    fill(0);
    ellipse(); //right

    //mouth
    noFill();
    stroke(239, 171, 131);
    strokeWeight(3);
    arc(300, 380, 80, 80, TWO_PI, PI);

}
