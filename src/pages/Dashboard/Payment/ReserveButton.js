import { useContext } from 'react';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketContext';
import useTicketType from '../../../hooks/api/useTicket';
import SubTitle from './Subtitle';

const Button = styled.div`
  height: 37px;
  width: 200px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  background-color: lightgray;
  border: none;
  outline: none;
  :hover {
    background-color: #ffeed2;
    box-shadow: 0px 15px 20px lightgray;
    color: #000;
    transform: translateY(-7px);
  }
`;

export default function ReserveButton() {
  const { ticketTypeSelected, includesHotel } = useContext(TicketContext);
  const { ticketTypes } = useTicketType();
  return (
    <>
      {ticketTypeSelected.toLowerCase() === 'online' ? (
        <>
          <SubTitle>
            Fechado! O total ficou em <b>R${ticketTypes[0].price}</b>. Agora é só confirmar.
          </SubTitle>
          <Button>Reservar ingresso</Button>
        </>
      ) : (
        ''
      )}
      {includesHotel === '' ? (
        ''
      ) : (
        <>
          <SubTitle>
            Fechado! O total ficou em{' '}
            <b>R${includesHotel === 'Sem Hotel' ? ticketTypes[1].price : ticketTypes[2].price}</b>. Agora é só
            confirmar.
          </SubTitle>
          <Button>Reservar ingresso</Button>
        </>
      )}
    </>
  );
}