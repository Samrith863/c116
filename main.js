noseX=0;
noseY=0;

leftSX=0;
leftSY=0;

function preload(){
moustache=loadImage("https://i.postimg.cc/WpX61SQG/moustache-removebg-preview.png");
halo=loadImage("https://i.postimg.cc/bwzZSjkd/halo-removebg-preview.png");
left_wing=loadImage("https://i.postimg.cc/MGGJhzjk/left-new-wing-removebg-preview.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);

poseNet.on("pose",gotPose);
}

function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(moustache,noseX-22,noseY+5,50,20);
image(halo,noseX-30,noseY-130,80,80);
image(left_wing,leftSX-280,leftSY-150,200,200);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        leftSX=results[0].pose.leftShoulder.x;
        leftSY=results[0].pose.leftShoulder.y;
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x="+results[0].pose.nose.x);
        console.log("Nose y="+results[0].pose.nose.y);

    }
}

function take_snapshot(){
save("MeSelfieAhoy.png");
}