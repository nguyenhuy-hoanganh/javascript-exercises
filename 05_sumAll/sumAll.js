const sumAll = function(int1, int2) {
    if (typeof int1 != "number" || typeof int2 != "number" ||
        !Number.isInteger(int1) || !Number.isInteger(int2) ||
        int1 < 0 || int2 < 0) {
            return "ERROR";
        }
           
    let finalSum = 0;
    let lesserInt;
    let greaterInt;

    if (int1 > int2) {
        lesserInt = int2;
        greaterInt = int1;
    } else {
        lesserInt = int1;
        greaterInt = int2;
    }

    for (let i = lesserInt; i <= greaterInt; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
