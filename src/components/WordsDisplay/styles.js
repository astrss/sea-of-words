import styled from "styled-components";
import { PADDING, GAP_BETWEEN_COLUMNS, GAP_BETWEEN_LETTERS } from "./constants";

export const WordGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${GAP_BETWEEN_COLUMNS}px;
  padding: ${PADDING}px;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
`;

export const WordColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP_BETWEEN_LETTERS}px;
`;

export const WordContainer = styled.div`
  display: flex;
  gap: ${GAP_BETWEEN_LETTERS}px;
  justify-content: center;
`;

export const LetterBox = styled.div`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  max-width: 72px;
  max-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: ${(props) => Math.min(props.$size * (42 / 72), 42)}px;
  font-weight: 700;
  line-height: 1;

  ${(props) =>
    props.$isGuessed &&
    `
      background: #65BD65;
    `}
`;
