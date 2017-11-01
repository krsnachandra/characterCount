function countLetters(string) {
  var noSpaces = string.toLowerCase().split(" ").join("").split("");
  var letterCount = {};
  for (var letter of noSpaces) {
    if (letter in letterCount) {
      letterCount[letter]++;
    }
    else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("hello"));
console.log(countLetters("aabbcc"));