function largestOfFour(arr) {
  let final_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let new_array = arr[i];
    let check_max = new_array[0];
    for (let j = 0; j < new_array.length; j++) {
      if (check_max < new_array[j]) {
        check_max = new_array[j];
      }
    }
    final_arr[i] = check_max;
  }
  return final_arr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

/*function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}*/