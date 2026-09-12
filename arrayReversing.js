const reverseArray = (arr) => {
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

// console.log(reverseArray([1, 2, 3, 4, 5]));

export default reverseArray;
