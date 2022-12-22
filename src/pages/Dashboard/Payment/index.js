import Options from './Options';
import SubTitle from './Subtitle';
import Title from './Title';
import ReserveButton from './ReserveButton';
import ChosenTicket from './ChosenTicket';
import useTicket from '../../../hooks/api/useTicket';
import { useContext, useEffect, useState } from 'react';
import TicketContext from '../../../contexts/TicketContext';

export default function Payment() {
  const { ticket } = useTicket();
  const [userTicket, setUserTicket] = useState({});
  const { setTicketReserved } = useContext(TicketContext);

  useEffect(() => {
    if (ticket) {
      setUserTicket(ticket);
      setTicketReserved(ticket);
    }
  }, [userTicket]);

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      {ticket ? (
        <ChosenTicket />
      ) : (
        <>
          {' '}
          <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
          <Options />
          <ReserveButton></ReserveButton>{' '}
        </>
      )}
    </>
  );
}
