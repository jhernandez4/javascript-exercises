const sumAll = function(startNum, endNum) {
    let sum = 0;
    let errorMessage = "ERROR";

    if(!Number.isInteger(startNum) || !Number.isInteger(endNum)){
        return errorMessage;
    }
    if (startNum < 0 || endNum < 0){
        return errorMessage;
    }
    // Swap variable values if startNum is larger
    if (startNum > endNum){
        const temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    for (let i = startNum; i <= endNum; i++){
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
