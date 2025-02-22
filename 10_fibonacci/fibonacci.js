const fibonacci = function(position) {
    position = parseInt(position);

    if (position < 0) {
        return "OOPS";
    } 
    if (position === 0) {
        return 0;
    }

    fibArray = [1, 1];

    // Add to the array, up to the given position
    for (let i = 0; i < position - 2; i++) {
        newNum = fibArray.at(fibArray.length - 1) + fibArray.at(fibArray.length - 2)
        fibArray.push(newNum);
    }

    return fibArray[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
