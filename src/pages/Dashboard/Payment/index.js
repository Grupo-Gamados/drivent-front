import Options from './Options';
import React, { useContext, useEffect, useState } from 'react';
import SubTitle from './Subtitle';
import Title from './Title';
import ChosenTicket from './ChosenTicket';
import useTicket from '../../../hooks/api/useTicket';
import ReserveButton from './ReserveButton';
import CreditCard from './CreditCard';
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
        <>
          <ChosenTicket />
          <CreditCard />
        </>
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
