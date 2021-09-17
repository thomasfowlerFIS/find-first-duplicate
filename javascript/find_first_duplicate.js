const findFirstDuplicate = (arr) => {
  let dupeMap = {}
  let minIndex = arr.length === 1 || arr.length === 0 ? -1 : 
    arr.reduce((pi, c, i) => {
      dupeMap[c] = dupeMap[c] !== undefined ? {index: i, value: Infinity} : {index: i, value: c}
      return dupeMap[c].value === Infinity && (pi === -1 || pi > dupeMap[c].index) ? dupeMap[c].index : pi
    }, -1)
  return arr[minIndex] === undefined ? -1 : arr[minIndex]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * We want to first create a map to store occurrences
 * of a given number. If we have an empty array or
 * an array of one number, there are no duplicates
 * so we return -1. Otherwise, we take the array and
 * reduce it to a minimum (i.e. first) index of the
 * duplicate. We iterate and store each unique number
 * in the map, its latest index and a value. For
 * each number's first occurence we store the index
 * and the value of the number. For the second
 * occurrence of a number we store the latest index
 * and then set the value to Infinity. If we encounter
 * a duplicate, and if its index is less than the 
 * previous index, we return it. Otherwise, we return
 * the previous index. If the minimum or first index
 * is associated with an element we return it,
 * otherwise we return -1.
 */
