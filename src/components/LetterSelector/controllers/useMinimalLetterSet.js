import { useMemo } from "react";

const useMinimalLetterSet = (words) => {
  const getMinimalLetterSet = (words) => {
    const letterCounts = {};

    words.forEach((word) => {
      const wordLetterCounts = {};

      for (const letter of word) {
        wordLetterCounts[letter] = (wordLetterCounts[letter] || 0) + 1;
      }

      for (const [letter, count] of Object.entries(wordLetterCounts)) {
        letterCounts[letter] = Math.max(letterCounts[letter] || 0, count);
      }
    });

    const minimalLetterSet = [];
    for (const [letter, count] of Object.entries(letterCounts)) {
      for (let i = 0; i < count; i++) {
        minimalLetterSet.push(letter);
      }
    }

    return minimalLetterSet;
  };

  return useMemo(() => getMinimalLetterSet(words), [words]);
};

export default useMinimalLetterSet;
