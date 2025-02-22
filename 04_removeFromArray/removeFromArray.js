const removeFromArray = function(array, ...removedElements) {
    for (let element of removedElements) {
        while (array.indexOf(element) != -1) {
            array.splice(array.indexOf(element), 1)
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
