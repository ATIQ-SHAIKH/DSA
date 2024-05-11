// Sort the array using bubble sort

/**
How it works:
1. Go through the array, one value at a time.
2. For each value, compare the value with the next value.
3. If the value is higher than the next one, swap the values so that the highest value comes last.
4. Go through the array as many times as there are values in the array.
*/

// Time Complexity: O(n²)

module.exports = (array) => {
  for (j = 0; j < array.length; j++) {
    // Flag to check if any element was swapped or not
    let swap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
    // if not swapped means array is sorted
    if (!swap) break;
  }
  console.log("\nArray sorted using bubble sort: ", array);
};
