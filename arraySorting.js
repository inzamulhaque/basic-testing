const sortArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const sortedArray = [];

  while (arr.length > 0) {
    let min = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }

    sortedArray.push(min);
    arr.splice(minIndex, 1);
  }

  console.log(sortedArray);

  return sortedArray;
};

// const result = sortArray([100, 25, 30]);
// console.log(result);

export default sortArray;
