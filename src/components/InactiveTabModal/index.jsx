import Button from "../Button";
import * as Styled from "./styles";

const svgRibbon = (
  <svg
    width="384"
    height="113"
    viewBox="0 0 384 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M367.931 5.80324H16.0685V57.5004C16.0685 70.5819 25.5607 81.8402 38.7335 84.3888L182.08 112.152C187.882 113.274 193.857 113.284 199.664 112.172L345.201 84.2968C358.404 81.7676 367.926 70.4948 367.926 57.394V5.80324H367.931Z"
      fill="#CA5428"
    />
    <path
      d="M368 0H16V51.6023C16 64.6597 25.4959 75.8974 38.6739 78.4413L182.077 106.154C187.881 107.274 193.858 107.284 199.667 106.173L345.261 78.3495C358.469 75.8249 367.995 64.5729 367.995 51.4961V0H368Z"
      fill="#EC6B3A"
    />
    <path d="M1.97835 19L16 0V19H0" fill="#9A4626" />
    <path d="M382.022 19L368 0V19H384" fill="#9A4626" />
  </svg>
);

const InactiveTabModal = ({ onRefresh }) => {
  return (
    <>
      <Styled.Overlay />
      <Styled.ModalWrapper>
        <Styled.SvgContainer>
          {svgRibbon}
          <Styled.SvgText>Две вкладки с игрой?</Styled.SvgText>
        </Styled.SvgContainer>
        <Styled.Text>
          Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить
          играть в этой вкладке, обновите страницу.
        </Styled.Text>
        <Styled.ButtonContainer>
          <Button action={onRefresh}>Обновить</Button>
        </Styled.ButtonContainer>
      </Styled.ModalWrapper>
    </>
  );
};

export default InactiveTabModal;
