// Sort the array using Quick Sort

/**
 *=> How it works:
 *1. Choose a value in the array to be the pivot element.
 *2. Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
 *3. Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
 *4. Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
 *
 *Time Complexity (Worst case): O(n²)
 *Time Complexity (Average case if pivot chosen properly): O(n log(n))
 */

module.exports = (array) => {
  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++)
      if (arr[i] < pivot) leftArr.push(arr[i]);
      else rightArr.push(arr[i]);

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

  const result = quickSort(array);

  console.log("\nArray sorted using Insertion Sort: ", result);
};
