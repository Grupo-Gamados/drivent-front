import styled from 'styled-components';
import { useState } from 'react';

export default function OptionBox({ description, price, optionSelected, setOptionSelected }) {
  const [selected, setSelected] = useState(false);
  function selectOption() {
    optionSelected !== description ? setSelected(true) : setSelected(!selected);
    setOptionSelected(description);
  }
  return (
    <BoxWrapper onClick={selectOption} isClicked={selected} optionSelected={optionSelected} description={description}>
      <h1>{description}</h1>
      <h2>R$ {price}</h2>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  width: 145px;
  height: 145px;
  border: ${(props) => (props.isClicked && props.optionSelected === props.description ? 'none' : '1px solid #cecece')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  background-color: ${(props) =>
    props.isClicked && props.optionSelected === props.description ? '#FFEED2' : '#ffffff'};

  h1 {
    font-size: 16px;
    color: #454545;
    padding-bottom: 10px;
  }
  h2 {
    font-size: 14px;
    color: #898989;
  }
`;
