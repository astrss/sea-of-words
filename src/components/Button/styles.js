import styled from "styled-components";
import { MOBILE_DEVICE } from "../../constants";

export const Button = styled.div`
  background: #65bd65;
  border-radius: 50px;
  font-size: 40px;
  font-weight: 700;
  padding: 10px 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: ${MOBILE_DEVICE}px) {
    font-size: 25px;
    padding: 10px 20px;
  }
`;
