import useLevels from "./hooks/useLevels";
import useWordSelection from "./hooks/useWordSelection";

import WordsDisplay from "./components/WordsDisplay";
import LetterSelector from "./components/LetterSelector";

import * as Styled from "./styles/AppStyles";

const App = () => {
  const { currentLevel, levelNumber, goToNextLevel } = useLevels();
  const {
    guessedWords,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    selectedLetters,
    isMouseDown,
  } = useWordSelection(currentLevel.words);

  return (
    <Styled.ProjectWrapper onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      <Styled.Wrapper>
        <Styled.HeaderWrapper>
          <Styled.LevelName>Уровень: {levelNumber}</Styled.LevelName>
          <WordsDisplay
            words={currentLevel.words}
            columns={Math.ceil(currentLevel.words.length / 5)}
            guessedWords={guessedWords}
          />
        </Styled.HeaderWrapper>
        <LetterSelector
          currentLevel={currentLevel}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          selectedLetters={selectedLetters}
          isMouseDown={isMouseDown}
        />
        <button onClick={goToNextLevel}>Next Level</button>
      </Styled.Wrapper>
    </Styled.ProjectWrapper>
  );
};

export default App;
