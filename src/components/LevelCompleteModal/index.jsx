import Button from "../Button";
import { LOCALSTORAGE_STATE } from "../../constants";
import * as Styled from "./styles";

const LevelCompleteModal = ({ onClose }) => {
  const levelNumber = localStorage.getItem(LOCALSTORAGE_STATE.levelNumber);
  return (
    <Styled.ModalWrapper>
      <Styled.Content>
        <div>
          <Styled.LevelNumber>
            Уровень {levelNumber - 1} пройден
          </Styled.LevelNumber>
          <Styled.Prise>Изумительно!</Styled.Prise>
        </div>
        <Button action={onClose}>Уровень {levelNumber}</Button>
      </Styled.Content>
    </Styled.ModalWrapper>
  );
};

export default LevelCompleteModal;
