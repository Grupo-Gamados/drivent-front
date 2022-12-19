import { useState } from 'react';
import styled from 'styled-components';
import useTicketType from '../../../hooks/api/useTicket';
import OptionBox from './OptionBox';

export default function Options() {
  const [optionSelected, setOptionSelected] = useState('');
  const { ticketTypes } = useTicketType();

  return (
    <OptionsWrapper>
      <OptionBox
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        description={ticketTypes && ticketTypes[1] ? ticketTypes.name : 'Presencial'}
        price={ticketTypes && ticketTypes[1] ? ticketTypes.price : '250'}
      ></OptionBox>
      <OptionBox
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        description={ticketTypes && ticketTypes[2] ? ticketTypes.name : 'Online'}
        price={ticketTypes && ticketTypes[2] ? ticketTypes.price : '100'}
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
