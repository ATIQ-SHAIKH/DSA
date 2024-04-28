// find the lowest element

module.exports = (array) => {
  let lowest = null;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) lowest = array[i];
    else if (array[i] < lowest) lowest = array[i];
  }
  console.log(`lowest element in the array is: ${lowest}`);
};
