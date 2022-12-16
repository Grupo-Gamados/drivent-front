import { useState } from 'react';
import styled from 'styled-components';
import OptionBox from './OptionBox';

export default function Options() {
  const [optionSelected, setOptionSelected] = useState('');
  return (
    <OptionsWrapper>
      <OptionBox
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        description={'Presencial'}
        price={'250'}
      ></OptionBox>
      <OptionBox
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        description={'Online'}
        price={'100'}
      ></OptionBox>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 24px;
  }
`;
