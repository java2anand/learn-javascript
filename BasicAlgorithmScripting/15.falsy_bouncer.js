function bouncer(arr) {
  let falsy_arr = [false, null, 0, "", NaN, undefined];
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!falsy_arr.includes(arr[i])) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}

bouncer([7, "ate", "", false, 9]);
