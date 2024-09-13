/*
 *  // microbit file: https://makecode.microbit.org/_cR92k1fFT8be
 */

let yPos = 100; // to store the y position of the text
let connectBtn; //the conect button
let rawData = 0; //global variable to hold serial data
let myText = "no text yet";

function onReceivedString(receivedString) {
  myText = receivedString;
}

function onBluetoothReceivedValue(name, value) {
  myText = name + " " + value;
  yPos = height / 2 + value;
}

function setup() {
  createCanvas(400, 400);
  setupBLE(); //this adds the "connect" button

  //add a link to the microbit sketch
  let link = createA(
    "https://makecode.microbit.org/_cR92k1fFT8be",
    "put this file on your microbit"
  );
  link.attribute("target", "_blank");
  link.style("color", "white");
  link.style("color", "white");
  link.position(150, 2); // Adjust x, y coordinates as needed
  link.style("font-family", "Arial, Helvetica, sans-serif");
}

function draw() {
  background("black");
  //use fill color to show connected status
  fill("red");
  if (typeof uBitDevice != "undefined") {
    if (uBitDevice.gatt.connected) {
      fill("green");
    }
  }

  textAlign(CENTER, CENTER);
  text(myText, width / 2, yPos);
}

function mousePressed() {
  microBitWriteString("A" + "\n"); // sends "A" to the micro:bit
  console.log("sent test");
}
