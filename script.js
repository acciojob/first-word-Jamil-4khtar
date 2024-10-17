function firstWord(s) {
  // your code here
  const words = s.trim().split(" ");
  return words[0]; 
  // return the first word of the string, ignoring punctuation and capitalization.  For example, "Hello, World!" should return "Hello".  For an empty string, return an empty string.  For a single word string, return the word itself.  For a string with multiple spaces between words, return the first word.  For a string with leading or trailing spaces, remove them before splitting and returning the first word.  For a string with multiple punctuation marks at the end, remove them before splitting and returning the first word.  For a string with multiple consecutive spaces, treat them as a single space before splitting and returning the first word.  For a string with multiple consecutive punctuation marks, treat them as a single punctuation mark before splitting and returning the first word.  For a string with multiple consecutive spaces and punctuation marks, treat them as a single space and punctuation mark before splitting and returning the first word.
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
