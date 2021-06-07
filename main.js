function setup(){
    video=createCapture(VIDEO);
    video.size(500,400);
    video.position(100,140);
    canvas=createCanvas(500,400);
    canvas.position(800,140);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}
function draw(){
  background("#ffffff");
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotposes(results){
  if(results.length>0){
      console.log(results);
  }
}