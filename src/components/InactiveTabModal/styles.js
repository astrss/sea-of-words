import styled from "styled-components";
import { MOBILE_DEVICE } from "../../constants";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  border-radius: 8px;
  max-width: 530px;
  min-width: 300px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: ${MOBILE_DEVICE}px) {
    gap: 30px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Text = styled.div`
  color: #4d4d4d;
  font-size: 30px;
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (max-width: ${MOBILE_DEVICE}px) {
    font-size: 26px;
  }
`;

export const ButtonContainer = styled.div`
  width: 300px;
`;

export const SvgContainer = styled.div`
  position: absolute;
  top: -19px;

  @media (max-width: ${MOBILE_DEVICE}px) {
    svg {
      width: 300px;
      height: 96px;
    }
  }
`;

export const SvgText = styled.div`
  position: absolute;
  top: calc(50% + -15px);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (max-width: ${MOBILE_DEVICE}px) {
    font-size: 23px;
  }
`;
