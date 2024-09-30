import * as Styled from "./styles";

const Button = ({ action, children }) => {
  return <Styled.Button onClick={action}>{children}</Styled.Button>;
};

export default Button;
