import {
  useMinimalLetterSet,
  useLetterSelectorLogic,
  useTouchMoveHandler,
  useCircleRadius,
} from "./controllers";
import * as Styled from "./styles";

const LetterSelector = ({
  currentLevel,
  handleMouseDown,
  handleMouseEnter,
  selectedLetters,
  isMouseDown,
}) => {
  const minimalLetters = useMinimalLetterSet(currentLevel.words);
  const { letterRefs, pathData } = useLetterSelectorLogic(
    minimalLetters,
    isMouseDown,
    selectedLetters
  );
  const { handleTouchMove } = useTouchMoveHandler(
    isMouseDown,
    minimalLetters,
    letterRefs,
    handleMouseEnter
  );

  const circleRadius = useCircleRadius();
  const updatedCircleRadius = circleRadius - 10;
  const angleStep = (2 * Math.PI) / minimalLetters.length;

  return (
    <Styled.Container>
      <Styled.SelectedLettersWrapper>
        {selectedLetters.map((item, index) => (
          <Styled.SelectedLetter key={index}>
            {item.letter}
          </Styled.SelectedLetter>
        ))}
      </Styled.SelectedLettersWrapper>
      <Styled.Overlay>
        <Styled.SvgOverlay>
          <Styled.PathOverlay d={pathData} />
        </Styled.SvgOverlay>
      </Styled.Overlay>
      <Styled.Circle>
        {minimalLetters.map((letter, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const leftPosition = updatedCircleRadius * Math.cos(angle);
          const topPosition = updatedCircleRadius * Math.sin(angle);
          const isActive = selectedLetters.some(
            (item) => item.letter === letter && item.index === index
          );

          return (
            <Styled.LetterWrapper
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              $topPosition={topPosition}
              $leftPosition={leftPosition}
              $isActive={isActive}
              onMouseDown={() => handleMouseDown(letter, index)}
              onTouchStart={() => handleMouseDown(letter, index)}
              onMouseEnter={() => handleMouseEnter(letter, index)}
              onTouchMove={handleTouchMove}
            >
              <Styled.Letter $isActive={isActive}>{letter}</Styled.Letter>
            </Styled.LetterWrapper>
          );
        })}
      </Styled.Circle>
    </Styled.Container>
  );
};

export default LetterSelector;
