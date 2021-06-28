// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let happyButton;
let sadButton;
let trainButton;

// Global ML Variables
let featureExtractor;
let classifier;
let video;
let happies;
let sads;
let isModelReady;
let isTrainComplete;


function setup() {
  canDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  buildButtons();

  happies = 0;
  sads = 0;

  isModelReady = false;
  isTrainComplete = flase;

  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildButtons() {
  buttonDiv = createDiv();
  happyButton = createButton("Happy");
  happyButton.parent(buttonDiv);
  happyButton.mousePressed(function()) {

  });
}

function videoReady() {

}

function featureExtractorLoaded() {

}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
