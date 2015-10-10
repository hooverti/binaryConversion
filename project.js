//this puts the cursor in the input box automatically
function setFocus() {
    document.getElementById("numberInput").focus();
}

//binary conversion function
function convertBinary() {
    //get user input for starting conversion
    var numberOut = parseInt(document.getElementById("numberInput").value);
    //checks that user number is in parameters
    if (numberOut >= 0 && numberOut <= 255) {
        document.getElementById("unsignedBin").innerHTML = ("00000000" + (numberOut).toString(2)).substr(-8).replace(/\d{4}/g, '$& ');
        document.getElementById("oneBin").innerHTML = (~(numberOut) >>> 0).toString(2).substr(-8).replace(/\d{4}/g, '$& ');
        document.getElementById("twoBin").innerHTML = ((~(numberOut) >>> 0) + 1).toString(2).substr(-8).replace(/\d{4}/g, '$& ');
        document.getElementById("octal").innerHTML = (numberOut).toString(8);
        document.getElementById("hex").innerHTML = (numberOut).toString(16);
        
    //alerts user if their number isn't in parameters    
    } else {
        window.alert("Enter an integer between 0 and 255");
    }
}

//this lets enter key start conversion
function keyPress() {
    if (event.keyCode === 13) {
        convertBinary();
    }
}