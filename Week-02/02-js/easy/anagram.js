/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s/g, "");
  const clean2 = str2.toLowerCase().replace(/\s/g, "");
  return clean1.split("").sort().join("") === clean2.split("").sort().join("");
}

module.exports = isAnagram;
