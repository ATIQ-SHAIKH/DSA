// Sort the array using Selection Sort

/**
=>How it works:
1. Go through the array to find the lowest value.
2. Move the lowest value to the front of the unsorted part of the array.
3. Go through the array again as many times as there are values in the array.
*/

// Time Complexity: O(n²)

module.exports = (array) => {
  for (i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      const temp = array[minIndex];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log("\nArray sorted using selection sort: ", array);
};
