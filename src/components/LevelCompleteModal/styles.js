import styled from "styled-components";
import { MOBILE_DEVICE } from "../../constants";

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #2b344b;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const LevelNumber = styled.div`
  font-size: 37px;
  font-weight: 700;
  text-align: center;
  @media (max-width: ${MOBILE_DEVICE}px) {
    font-size: 27px;
  }
`;

export const Prise = styled.div`
  font-size: 53px;
  font-weight: 700;
  text-align: center;
  @media (max-width: ${MOBILE_DEVICE}px) {
    font-size: 43px;
  }
`;
