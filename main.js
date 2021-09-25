song = "";
song2 = "";

function preload() {
    song = loadSound("The Duck Song.mp3");
    song2 = loadSound("The Duck Song 2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}