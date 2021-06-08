leftWristX=0;
rightWristX=0;
difference=0;
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
  textSize(difference);
  fill('#4287f5');
  text('Sky!',30,200);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotposes(results){
  if(results.length>0){
      console.log(results);
      leftWristX=results[0].pose.leftWrist.x;
      rightWristX=results[0].pose.rightWrist.x;
      difference=floor(leftWristX-rightWristX);
      console.log("Left wrist x= "+leftWristX+"Right wrist x= "+rightWristX+"and the difference is "+difference);

  }
}