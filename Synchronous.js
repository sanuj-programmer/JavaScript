// Synchronous callback function :  It will execute instantly and sequentally according to given order 

// example

function parentFunction(name, callback) {
    callback();
    console.log("Hey " + name);
}

function randomFunction() {
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String", randomFunction);