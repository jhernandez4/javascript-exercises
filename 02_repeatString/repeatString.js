const repeatString = function(stringInput, numRepeats) {
    let outputString = "";
    if ( numRepeats < 0){
        outputString = "ERROR";
    }
    else{
        for (let i = 0; i < numRepeats; i++){
            outputString += stringInput;
        }   
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
