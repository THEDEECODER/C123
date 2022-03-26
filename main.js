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

}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}