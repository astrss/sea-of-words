import { useState, useEffect, useRef } from "react";
import {
  PADDING,
  GAP_BETWEEN_COLUMNS,
  GAP_BETWEEN_LETTERS,
  MAX_CONTAINER_WIDTH,
} from "../constants";

const useWordsDisplay = (words, guessedWords = [], columns = 1) => {
  const wordGridRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(MAX_CONTAINER_WIDTH);

  useEffect(() => {
    const updateWidth = () => {
      if (wordGridRef.current) {
        const width = wordGridRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const sortedWords = words.sort((a, b) => a.length - b.length);

  const splitWordsIntoColumns = (words, columns) => {
    const columnsArray = Array.from({ length: columns }, () => []);
    const itemsPerColumn = Math.ceil(words.length / columns);

    words.forEach((word, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      columnsArray[columnIndex].push(word);
    });

    return columnsArray;
  };

  const isLetterGuessed = (word, letterIndex) => {
    const guessedWord = guessedWords.find((guessed) => guessed === word);
    return guessedWord && guessedWord[letterIndex] === word[letterIndex];
  };

  const getMaxWordLength = () => {
    return Math.max(...words.map((word) => word.length));
  };

  const maxWordLength = getMaxWordLength();

  const totalAvailableWidth =
    containerWidth - 2 * PADDING - GAP_BETWEEN_COLUMNS * (columns - 1);
  const columnWidth = totalAvailableWidth / columns;

  const letterBoxSize =
    (columnWidth - GAP_BETWEEN_LETTERS * (maxWordLength - 1)) / maxWordLength;

  const wordColumns = splitWordsIntoColumns(sortedWords, columns);

  return {
    wordGridRef,
    wordColumns,
    letterBoxSize,
    isLetterGuessed,
  };
};

export default useWordsDisplay;
