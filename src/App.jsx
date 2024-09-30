import useLevels from "./hooks/useLevels";
import useWordSelection from "./hooks/useWordSelection";
import useTabAndModalManager from "./hooks/useTabAndModalManager";

import WordsDisplay from "./components/WordsDisplay";
import LetterSelector from "./components/LetterSelector";
import LevelCompleteModal from "./components/LevelCompleteModal";
import InactiveTabModal from "./components/InactiveTabModal";

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
    clearWordSelectionState,
  } = useWordSelection(currentLevel.words);

  const {
    showLevelCompleteModal,
    showInactiveTabModal,
    closeLevelCompleteModal,
    handleRefresh,
  } = useTabAndModalManager(
    guessedWords,
    currentLevel.words.length,
    goToNextLevel,
    clearWordSelectionState
  );

  return (
    <Styled.ProjectWrapper onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      <Styled.Wrapper>
        {showLevelCompleteModal && (
          <LevelCompleteModal onClose={closeLevelCompleteModal} />
        )}

        {showInactiveTabModal && <InactiveTabModal onRefresh={handleRefresh} />}
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
      </Styled.Wrapper>
    </Styled.ProjectWrapper>
  );
};

export default App;
