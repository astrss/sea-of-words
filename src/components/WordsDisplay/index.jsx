import * as Styled from "./styles";
import { useWordsDisplay } from "./controllers";

const WordsDisplay = ({ words, guessedWords = [], columns = 1 }) => {
  const { wordGridRef, wordColumns, letterBoxSize, isLetterGuessed } =
    useWordsDisplay(words, guessedWords, columns);

  return (
    <Styled.WordGrid ref={wordGridRef}>
      {wordColumns.map((column, columnIndex) => (
        <Styled.WordColumnContainer key={columnIndex}>
          {column.map((word, wordIndex) => (
            <Styled.WordContainer key={wordIndex}>
              {word.split("").map((letter, letterIndex) => {
                const isWordGuessed = isLetterGuessed(word, letterIndex);
                return (
                  <Styled.LetterBox
                    key={letterIndex}
                    $isGuessed={isWordGuessed}
                    $size={letterBoxSize}
                  >
                    {isWordGuessed && letter}
                  </Styled.LetterBox>
                );
              })}
            </Styled.WordContainer>
          ))}
        </Styled.WordColumnContainer>
      ))}
    </Styled.WordGrid>
  );
};

export default WordsDisplay;
