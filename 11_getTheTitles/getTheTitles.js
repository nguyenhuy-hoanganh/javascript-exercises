const getTheTitles = function(books) {
  let titlesArray = [];
    for (let book of books) {
      titlesArray.push(book.title)
    }
  
  return titlesArray;
};

// More elegant solution below, using map()
// const getTheTitles = function (array) {
//   return array.map((book) => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;
