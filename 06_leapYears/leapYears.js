const leapYears = function(year) {
    let leapYearBool = false;
    if (year % 4 == 0){
        if (year % 100 != 0 || year % 400 == 0){
            leapYearBool = true;
        }
    }

    return leapYearBool
};

// Do not edit below this line
module.exports = leapYears;
