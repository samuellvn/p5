var canvas;
var video;

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill("red");
    stroke("black");
    circle(pose_n_x, pose_n_y, 20);
}
