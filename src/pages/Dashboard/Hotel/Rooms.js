import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../contexts/HotelContext';
import BookingContext from '../../../contexts/BookingContext';
import Room from './Room';
import BookingButton from './BookingButton';
import { getRoomsByHotel } from '../../../services/hotelApi';
import useToken from '../../../hooks/useToken';

export default function Rooms() {
  const { hotelSelectedId } = useContext(HotelContext);
  const { bookingSelectedId } = useContext(BookingContext);
  const [ roomsByHotel, setRoomsByHotel ] = useState('');
  const token = useToken();

  useEffect(() => {
    const response = getRoomsByHotel(token, hotelSelectedId);
    response.then((res) => {
      setRoomsByHotel(res);
    }
    );
  }, [hotelSelectedId]);

  return (
    <>
      <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
      <HotelsWrapper>
        {roomsByHotel
          ? roomsByHotel.Rooms.map((room) => (
            <Room name={room.name} id={room.id} capacity={room.capacity} key={room.id}></Room>
          ))
          : ''}
      </HotelsWrapper>
      {bookingSelectedId ? <BookingButton /> : ''}
    </>
  );
}

const SubTitle = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  color: #8e8e8e;
  line-height: 26px;
  margin: 32px 0 24px 0;
  b {
    font-weight: 700;
  }
`;

const HotelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 0 16px 10px 0;
  }
`;
