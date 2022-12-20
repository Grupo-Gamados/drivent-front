import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import Options from './Options';
import SubTitle from './Subtitle';
import Title from './Title';
import useTicketType from '../../../hooks/api/useTicket';
import ReserveButton from './ReserveButton';

export default function Payment() {
  const { ticketTypeSelected, includesHotel } = useContext(TicketContext);
  const { ticketTypes } = useTicketType();
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <Options />
      <ReserveButton></ReserveButton>
    </>
  );
}
