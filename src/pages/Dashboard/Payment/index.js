import Options from './Options';
import SubTitle from './Subtitle';
import Title from './Title';
import ReserveButton from './ReserveButton';
import ChosenTicket from './ChosenTicket';
import useTicket from '../../../hooks/api/useTicket';
import { useContext, useEffect } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import CreditCard from './CreditCard';

export default function Payment() {
  const { ticket } = useTicket();
  const { reloadTicket } = useContext(TicketContext);

  useEffect(() => {}, [reloadTicket]);

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      {ticket || reloadTicket ? (
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
