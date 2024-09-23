const reverseString = function(inputString) {
    stringReversed = "";

    for (let i = inputString.length - 1; i >=0; i--){
        stringReversed += inputString[i];
    }

    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
