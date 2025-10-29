import { useState } from "react";
import styled from "styled-components";


const BaseButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const StyledButton = styled(BaseButton)`
  background-color: ${({ $isSelected }) => $isSelected ? 'pink' : '#ffffff'};

`;

const RedButton = styled(BaseButton)`
  background-color: red;
  :hover  {
    background-color: darkred;
    opacity: 0.7;
  }
`;
  
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton $isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
      <RedButton $isSelected={isSelected} onClick={clickHandler}>ボタン</RedButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン

      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
