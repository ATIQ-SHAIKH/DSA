// Sort the array using Insertion Sort

/**
=> How it works:
1. Take the first value from the unsorted part of the array.
2. Move the value into the correct place in the sorted part of the array.
3. Go through the unsorted part of the array again as many times as there are values.
*/

// Time Complexity: O(n²)

module.exports = (array) => {
  for (let i = 1; i < array.length; i++) {
    let swapWithIndex = i;
    const currentValue = array.splice(i, 1)[0]; // array.splice(index, count, item1, ....., itemX), creates a new array also modifies existing
    for (let j = i - 1; j >= 0; j--) {
      if (currentValue < array[j]) swapWithIndex = j;
    }
    array.splice(swapWithIndex, 0, currentValue);
  }
  console.log("\nArray sorted using Insertion Sort: ", array);
};
