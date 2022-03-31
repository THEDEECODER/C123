nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function preload(){
    
}
function setup(){
    canvas = createCanvas(550, 400);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 400);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#BB3E03');
    fill('#9D0208');
    text('TEXT', 50, 400);
    document.getElementById("span1").innerHTML = "Font size is = "+ difference;
    textSize(difference);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = Math.floor(leftwristx - rightwristx);
    console.log(difference);
    
}
}