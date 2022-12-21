import { useContext } from 'react';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketContext';
import useTicketType from '../../../hooks/api/useTicket';
import OptionBox from './OptionBox';
import SubTitle from './Subtitle';
export default function CreditCard() {
  return (
    <>
      <CreditCardWrapper>
        <p>Teste</p>
      </CreditCardWrapper>
    </>
  );
}

const CreditCardWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 24px;
  }
`;
