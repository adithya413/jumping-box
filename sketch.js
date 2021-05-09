var canvas;
var music;
var box1
var box2
var box3
var box4
var ball,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(100,580,200,20)
box1.shapeColor="green"
box2=createSprite(300,580,200,20)
box2.shapeColor="blue"
box3=createSprite(500,580,200,20)
box3.shapeColor="pink"
box4=createSprite(700,580,200,20)
box4.shapeColor="yellow"

ball=createSprite(20,190,40,40)
ball.velocityX=-5;
ball.velocityY=6;
ball.shapeColor="black"
//music.loop();


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges)
if(isTouching(ball,box1)){
    ball.shapeColor="green"
}
if(isTouching(ball,box2)){
    ball.shapeColor="blue"
}
if(isTouching(ball,box3)){
    ball.shapeColor="pink"
}
if(isTouching(ball,box4)){
    ball.shapeColor="yellow"
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
