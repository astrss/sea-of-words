import styled from "styled-components";
import { MOBILE_DEVICE } from "../../constants";
import { MOBILE_CIRCLE_RADIUS, DESKTOP_CIRCLE_RADIUS } from "./constants";

export const Circle = styled.div`
  position: relative;
  width: ${DESKTOP_CIRCLE_RADIUS * 2}px;
  height: ${DESKTOP_CIRCLE_RADIUS * 2}px;
  border-radius: 50%;
  border: 25px solid #3e4a68;

  @media (max-width: ${MOBILE_DEVICE}px) {
    width: ${MOBILE_CIRCLE_RADIUS * 2}px;
    height: ${MOBILE_CIRCLE_RADIUS * 2}px;
  }
`;

export const LetterWrapper = styled.div`
  position: absolute;
  top: ${(props) => `calc(50% + ${props.$topPosition}px)`};
  left: ${(props) => `calc(50% + ${props.$leftPosition}px)`};
  transform: translate(-50%, -50%);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #a6a8ab;
    top: 4.9px;
    left: 0;
    z-index: -1;
  }

  ${(props) =>
    props.$isActive &&
    `
      &::after {
        background: #af638c;
      }
    `}
`;

export const Letter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89.94px;
  height: 89.94px;
  font-size: 57px;
  font-weight: 700;
  color: #58595b;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  ${(props) =>
    props.$isActive &&
    `
      background: #e96fa4;
      color: #ffffff;
    `}

  @media (max-width: ${MOBILE_DEVICE}px) {
    width: 69.94px;
    height: 69.94px;
    font-size: 44px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SvgOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PathOverlay = styled.path`
  stroke: #638ec4;
  fill: none;
  stroke-width: 21;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const SelectedLettersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  height: 42px;
  gap: 3px;

  @media (max-width: ${MOBILE_DEVICE}px) {
    height: 33px;
  }
`;

export const SelectedLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: #ffffff;
  font-size: 30px;
  font-weight: 700;
  color: #4d4d4d;
  border-radius: 6px;

  @media (max-width: ${MOBILE_DEVICE}px) {
    width: 33px;
    height: 33px;
    font-size: 25px;
  }
`;
