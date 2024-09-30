import { useState, useEffect } from "react";
import { LOCALSTORAGE_STATE } from "../constants";

const useWordSelection = (words) => {
  const savedGuessedWords =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_STATE.guessedWords)) || [];

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState(savedGuessedWords);

  const handleMouseDown = (letter, index) => {
    setIsMouseDown(true);
    setSelectedLetters([{ letter, index }]);
  };

  const handleMouseEnter = (letter, index) => {
    if (isMouseDown) {
      setSelectedLetters((prevLetters) => {
        const lastLetterData =
          prevLetters.length > 1 ? prevLetters[prevLetters.length - 2] : null;

        if (
          lastLetterData &&
          lastLetterData.index === index &&
          prevLetters.length > 1
        ) {
          return prevLetters.slice(0, -1);
        }

        const alreadySelected = prevLetters.some(
          (item) => item.index === index
        );

        if (!alreadySelected) {
          return [...prevLetters, { letter, index }];
        }

        return prevLetters;
      });
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    const formedWord = selectedLetters.map((item) => item.letter).join("");
    if (words.includes(formedWord) && !guessedWords.includes(formedWord)) {
      setGuessedWords((prevGuessed) => {
        const newGuessedWords = [...prevGuessed, formedWord];
        localStorage.setItem(LOCALSTORAGE_STATE.guessedWords, JSON.stringify(newGuessedWords));
        return newGuessedWords;
      });
    }
    setSelectedLetters([]);
  };

  useEffect(() => {
    const savedGuessedWords = JSON.parse(localStorage.getItem(LOCALSTORAGE_STATE.guessedWords));
    if (savedGuessedWords) {
      setGuessedWords(savedGuessedWords);
    }
  }, []);

  const clearWordSelectionState = () => {
    setGuessedWords([]);
    localStorage.setItem(LOCALSTORAGE_STATE.guessedWords, JSON.stringify([]));
  };

  return {
    guessedWords,
    selectedLetters,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    isMouseDown,
    clearWordSelectionState,
  };
};

export default useWordSelection;
