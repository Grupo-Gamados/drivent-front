import { useContext } from 'react';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketContext';
import SubTitle from './Subtitle';
import { postTicket } from '../../../services/ticketApi';
import useToken from '../../../hooks/useToken';
import useTicketType from '../../../hooks/api/useTicketType';
import { toast } from 'react-toastify';

export default function ReserveButton() {
  const { ticketTypeSelected, includesHotel, reloadTicket, setReloadTicket } = useContext(TicketContext);
  const { ticketTypes } = useTicketType();
  const token = useToken();
  async function createTicket(ticketTypeId) {
    try {
      await postTicket(ticketTypeId, token);
      toast('Ticket reservado com sucesso!');
      setReloadTicket(!reloadTicket);
    } catch (error) {
      toast('Não foi possível reservar o ticket. Por favor, tente novamente.');
    }
  }

  return ticketTypes ? (
    <>
      {ticketTypeSelected.toLowerCase() === 'online' ? (
        <>
          <SubTitle>
            Fechado! O total ficou em <b>R${ticketTypes[0].price}</b>. Agora é só confirmar.
          </SubTitle>
          <Button onClick={() => createTicket(ticketTypes[0].id)}>Reservar ingresso</Button>
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
          <Button
            onClick={
              includesHotel === 'Sem Hotel'
                ? () => createTicket(ticketTypes[1].id)
                : () => createTicket(ticketTypes[2].id)
            }
          >
            Reservar ingresso
          </Button>
        </>
      )}
    </>
  ) : (
    ''
  );
}

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
