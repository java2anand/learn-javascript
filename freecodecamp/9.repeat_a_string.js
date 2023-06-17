function repeatStringNumTimes(str, num) {
  let new_str = "";
  if (num < 1) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      new_str += str;
    }
  }
  return new_str;
}

console.log(repeatStringNumTimes("abc", 3));