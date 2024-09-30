import { useState } from "react";

const useWordSelection = (words) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

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
    if (words.includes(formedWord)) {
      setGuessedWords((prevGuessed) => [...prevGuessed, formedWord]);
    }
    setSelectedLetters([]);
  };

  return {
    guessedWords,
    selectedLetters,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    isMouseDown,
  };
};

export default useWordSelection;
