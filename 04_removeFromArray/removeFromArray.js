const removeFromArray = function(numArray, ...args) {
    return numArray.filter((x) => !args.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
