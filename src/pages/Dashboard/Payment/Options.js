import { useContext } from 'react';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketContext';
import useTicketType from '../../../hooks/api/useTicketType';
import OptionBox from './OptionBox';
import SubTitle from './Subtitle';

export default function Options() {
  const { ticketTypes } = useTicketType();
  const { ticketTypeSelected } = useContext(TicketContext);

  return ticketTypes ? (
    <>
      <OptionsWrapper>
        <OptionBox
          description={ticketTypes && ticketTypes[1] ? ticketTypes[1].name : 'Presencial'}
          price={ticketTypes && ticketTypes[1] ? ticketTypes[1].price : '250'}
        ></OptionBox>
        <OptionBox
          description={ticketTypes && ticketTypes[0] ? ticketTypes[0].name : 'Online'}
          price={ticketTypes && ticketTypes[0] ? ticketTypes[0].price : '100'}
        ></OptionBox>
      </OptionsWrapper>
      {ticketTypeSelected.toLowerCase() === 'presencial' ? (
        <>
          <SubTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SubTitle>
          <OptionsWrapper>
            <OptionBox description={'Sem Hotel'} price={'0'}></OptionBox>
            <OptionBox description={'Com Hotel'} price={ticketTypes[2].price - ticketTypes[1].price}></OptionBox>
          </OptionsWrapper>
        </>
      ) : (
        ''
      )}
    </>
  ) : (
    ''
  );
}

const OptionsWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 24px;
  }
`;
