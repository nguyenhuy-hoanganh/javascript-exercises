const palindromes = function (string) {
    // Remove whitespace inside string, convert to lowercase, then
    // filter for valid characters
    filteredArray = string.replace(/\s+/g, '').toLowerCase().split("").filter(char => {
        return /[a-z0-9 ]/.test(char);
    })

    filteredString = filteredArray.join("");
    reversedFilteredString = filteredArray.reverse().join("");

    return filteredString === reversedFilteredString;
};

// Do not edit below this line
module.exports = palindromes;
