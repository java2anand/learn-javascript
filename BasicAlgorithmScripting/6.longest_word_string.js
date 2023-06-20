function findLongestWordLength(str) {
  const split_arrays = str.split(" ");
  let longest_word = 0;
  for (let i = 0; i < split_arrays.length; i++) {
    if (longest_word < split_arrays[i].length) {
      longest_word = split_arrays[i].length;
    }
  }
  return longest_word;
}

console.log(
  findLongestWordLength("The quick brown fox jumpeds over the lazy dog")
);