// Sort the array using Counting Sort

/**
 *=>How it works:
 *1.Create a new array for counting how many there are of the different values.
 *2.Go through the array that needs to be sorted.
 *3.For each value, count it by increasing the counting array at the corresponding index.
 *4.After counting the values, go through the counting array to create the sorted array.
 *5.For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index
 */

const findMax = (array) => {
  let max = 0;
  array.forEach((element) => {
    if (!max || max < element) max = element;
  });
  console.log(max);
  return max;
};

module.exports = (array) => {
  const sortedArray = [];
  // create a new array with 0 as all elements and length of the element will be same as max element in the array
  const max = findMax(array);
  const newArray = [];
  for (let i = 0; i < max + 1; i++) newArray.push(0);
  for (let j = 0; j < array.length; j++) newArray[array[j]]++;
  for (let k = 0; k < newArray.length; k++) {
    if (newArray[k]) for (let l = 0; l < newArray[k]; l++) sortedArray.push(k);
  }
  console.log("\nArray sorted using Counting Sort: ", sortedArray);
};
