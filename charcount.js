function countLetters(string) {
  var letterCount = {};
  for (var letter of string) {
    if (letter === " ") continue;
    if (!(letter in letterCount)) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++;

  }

  return letterCount;
}

console.log(countLetters("hello"));
console.log(countLetters("aabbcc"));
console.log(countLetters("lighthouse in the house and go to bed"));