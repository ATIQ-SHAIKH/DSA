/**
 * The Radix Sort algorithm sorts an array by individual digits,
 * starting with the least significant digit (the rightmost one).
 *
 * Radix Sort is a non comparative algorithm that only works with non negative integers
 *
 * How it works:
 * Start with the least significant digit (rightmost digit).
 * Sort the values based on the digit in focus by first putting the values in the correct bucket based on the digit in focus,
 * and then put them back into array in the correct order.
 * Move to the next digit, and sort again, like in the step above, until there are no digits left.
 *
 * Radix Sort must sort the elements in a stable way for the result to be sorted correctly.
 *
 * Time Complexity: O(n.k)
 * This means that Radix Sort depends both on the values that need to be sorted n, and the number of digits in the highest value k
 *
 */

module.exports = (array) => {
  const radixArray = [[], [], [], [], [], [], [], [], [], []];

  let max = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    while (array.length > 0) {
      const element = array.splice(array.length - 1, 1)[0];
      const radixIndex = Math.floor(element / exp) % 10;
      radixArray[radixIndex].push(element);
    }

    for (const bucket of radixArray) {
      while (bucket.length > 0) {
        const element = bucket.splice(bucket.length - 1, 1)[0];
        array.push(element);
      }
    }

    exp *= 10;
  }

  console.log("\nArray sorted using Radix Sort: ", array);
};
