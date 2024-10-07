# ubitWebBLE



Add the bluetoothconnection.js and the to your p5.js project root directory
don't forget to include the line <script src="bluetoothconnection.js"></script> in your index.html so the browser actually reads the file bluetoothconnection.js
add this line in setup:
setupBLE()
This will add a button to you sketch for connecting to your micro:bit


now to send data from p5js to microbit use:
microBitWriteString("whatever you want to send" + "\n"); // sends "A" to the micro:bit

to receive data over bluetooth add these functions in your sketch.js

// to receive a string
function onReceivedString(receivedString) {
  //do something with receivedString
}

//to receive a name + value
function onBluetoothReceivedValue(name, value) {
  //do something with name and value
}
 

when coding your micro:bit use the bluetooth extension.
"bluetooth uart write line" to send data.

if the text you send has a name and a value seperated with a colon like this "name:10" it will trigger the onBluetoothReceivedValue(name, value) function in yout p5 sketch

example microbit code to use with the example sketch: https://makecode.microbit.org/S35950-77875-77206-59357


other stuff:
if you want to reposition the connect button, do this:
connectButton.position(x,y)

