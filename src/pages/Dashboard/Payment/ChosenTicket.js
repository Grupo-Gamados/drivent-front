import styled from 'styled-components';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';

export default function ChosenTicket() {
  const { ticket } = useTicket();
  return ticket ? (
    <>
      <SubTitle>Ingresso escolhido</SubTitle>
      <TicketWrapper>
        <h1>
          {ticket.TicketType.name}
          {ticket.TicketType.name === 'presencial' && ticket.TicketType.includesHotel ? ' + Com Hotel' : ''}
          {ticket.TicketType.name === 'presencial' && !ticket.TicketType.includesHotel ? ' + Sem Hotel' : ''}
        </h1>{' '}
        <h2>R$ {!ticket ? '' : ticket.TicketType.price}</h2>
      </TicketWrapper>
    </>
  ) : (
    ''
  );
}

const TicketWrapper = styled.div`
  width: 290px;
  height: 110px;
  margin: 12px 0;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  background-color: #ffeed2;
  text-transform: capitalize;

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
