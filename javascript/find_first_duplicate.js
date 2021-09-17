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
