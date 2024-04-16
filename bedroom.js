img="";
status1="";
function preload(){
    img = loadImage('bedroom.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("cat",320,120);
    noFill();   
    stroke("#FF0000");
    rect(300,90,270,320);
}

function modelLoaded(){
    console.log("model loaded!");
    status1= true;  
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}