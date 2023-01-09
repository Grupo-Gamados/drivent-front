import styled from 'styled-components';
import { changeBooking } from '../../../services/bookingApi';
import useToken from '../../../hooks/useToken';
import { useContext } from 'react';
import BookingContext from '../../../contexts/BookingContext';
import useBooking from '../../../hooks/api/useBooking';
import HotelContext from '../../../contexts/HotelContext';

export default function ChangeBookingButton() {
  const token = useToken();
  const { isChangingBooking, setIsChangingBooking, bookingSelectedId, setBookingSelected, setBookingSelectedId } = useContext(BookingContext);
  const { reloadHotels, setReloadHotels, setHotelSelected, setHotelSelectedId } = useContext(HotelContext);
  const { booking } = useBooking();

  async function changeHotel() {
    if (!isChangingBooking) {
      setIsChangingBooking(!isChangingBooking);
    }
    else {
      await changeBooking(token, booking.id, bookingSelectedId);
      setIsChangingBooking(!isChangingBooking);
      setReloadHotels(!reloadHotels);
      resetHotelOptions();
    }
  }

  function resetHotelOptions() {
    setBookingSelected('');
    setBookingSelectedId(0);
    setHotelSelected('');
    setHotelSelectedId(0);
  }

  function cancelChangingBooking() {
    setIsChangingBooking(false);
    resetHotelOptions();
    setReloadHotels(!reloadHotels);
  }

  return (
    <Wrapper>
      <Button
        isChangingBooking={isChangingBooking}
        onClick={changeHotel}
      >
        {!isChangingBooking ? 'TROCAR DE QUARTO' : 'CONFIRMAR TROCA DE QUARTO'}
      </Button>
      {isChangingBooking ?       
        <Button onClick={cancelChangingBooking}
          isChangingBooking={isChangingBooking}
        >
          CANCELAR TROCA DE QUARTO
        </Button> : ''}
    </Wrapper>
  );
}

const Button = styled.div`
  height: ${(props) => (props.isChangingBooking ? '54px' : '32px')};
  width: 200px;
  border-radius: 4px;
  margin-top: ${(props) => (props.isChangingBooking ? '20px' : '32px')};
  margin-right: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  outline: none;
  text-align: center;
  :hover {
    background-color: #ffeed2;
    box-shadow: 0px 15px 20px lightgray;
    color: #000;
    transform: translateY(-7px);
  }
`;

const Wrapper = styled.div`
  display: flex;
`;
