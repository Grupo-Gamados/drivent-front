import Hotels from './Hotels';
import Rooms from './Rooms';
import Title from './Title';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';
import Message from './Message';
import { useContext } from 'react';
import HotelContext from '../../../contexts/HotelContext';
import useBooking from '../../../hooks/api/useBooking';
import BookedHotel from './BookedHotel';
import ChangeBookingButton from './ChangeBookingButton';

export default function Hotel() {
  const { ticket } = useTicket();
  const { hotelSelected } = useContext(HotelContext);
  const { booking } = useBooking();

  function wrongTicketMessage() {
    if (ticket) {
      if (ticket.status.toLowerCase() !== 'paid') {
        return 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';
      } else return 'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades';
    }
  }

  if (ticket && booking && booking.Room) {
    return (
      <>
        <Title>Escolha de hotel e quarto</Title>
        <SubTitle>Você já escolheu seu quarto:</SubTitle>
        <BookedHotel />
        <ChangeBookingButton />
      </>
    );
  }

  return ticket ? (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {ticket.status.toLowerCase() === 'paid' && ticket.TicketType.includesHotel ? (
        <>
          <SubTitle>Primeiro, escolha seu hotel</SubTitle>
          <Hotels></Hotels>
          {hotelSelected ? <Rooms /> : ''}
        </>
      ) : (
        <Message text={wrongTicketMessage()}></Message>
      )}
    </>
  ) : (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <Message text={'Você deve primeiro reservar e pagar um ingresso'}></Message>
    </>
  );
}
