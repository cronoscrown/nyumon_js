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
`;

const StyledButton = styled(BaseButton)`
  background-color: ${({ isSelected }) => isSelected ? 'pink' : '#ffffff'};
`;

const OrangeButton = styled(BaseButton)`
  background-color: orange;
`;


const OrangeButton = styled(StyledButton)`
  background: red;
  `;
  
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton $isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
      <OrangeButton $isSelected={isSelected} onClick={clickHandler}>ボタン</OrangeButton>
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
