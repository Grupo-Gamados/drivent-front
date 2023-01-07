import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import BookingContext from '../../../contexts/BookingContext';
import useBookingByRoomId from '../../../hooks/api/useBookingByRoomId';
import VacancyIcon from './VacancyIcon';

export default function Room({ name, capacity, id }) {
  const { bookingByRoomId } = useBookingByRoomId(id);
  const [isSelected, setIsSelected] = useState(false);
  const { bookingSelectedId, setBookingSelectedId } = useContext(BookingContext);

  let roomsQuantity = [];
  let bookedRooms = bookingByRoomId ? bookingByRoomId.length : 0;
  let isRoomFull = false;

  function selectRoom(roomId) {
    if (roomId !== bookingSelectedId) {
      setBookingSelectedId(roomId);
      setIsSelected(true);
    } else {
      setIsSelected(!isSelected);
      setBookingSelectedId(0);
    }
  }
  useEffect(() => {
    organizeRoom();
  }, [isSelected]);
  function organizeRoom() {
    roomsQuantity = [];
    let aux = capacity;
    while (aux !== 0) {
      if (bookedRooms > 0) {
        roomsQuantity.push(1);
        bookedRooms--;
      } else roomsQuantity.push(0);
      aux--;
    }
    if (id === bookingSelectedId) {
      roomsQuantity.unshift(2);
      roomsQuantity.pop();
    }
  }
  organizeRoom();

  if (bookingByRoomId) {
    if (bookingByRoomId.length === capacity) {
      isRoomFull = true;
    }
  }

  return !isRoomFull ? (
    <Wrapper isSelected={isSelected} id={id} bookingSelectedId={bookingSelectedId} onClick={() => selectRoom(id)}>
      <HotelName>{name}</HotelName>
      <IconWrapper>
        {bookingByRoomId
          ? roomsQuantity.map((vacancy, index) => <VacancyIcon vacancy={vacancy} key={index} id={id} />)
          : ''}
      </IconWrapper>
    </Wrapper>
  ) : (
    <RoomIsFullWrapper isRoomFull={isRoomFull}>
      <HotelName>{name}</HotelName>
      <IconWrapper>
        {bookingByRoomId ? roomsQuantity.map((vacancy, index) => <VacancyIcon vacancy={vacancy} key={index} />) : ''}
      </IconWrapper>
    </RoomIsFullWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 190px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #cecece;
  border-radius: 10px;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isSelected && props.bookingSelectedId === props.id ? '#FFEED2' : '#ffffff')};
  cursor: pointer;
`;

const RoomIsFullWrapper = styled.div`
  display: flex;
  width: 190px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #cecece;
  border-radius: 10px;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isRoomFull ? '#CECECE' : 'inherit')};
  cursor: ${(props) => (props.isRoomFull ? 'inherit' : 'pointer')};
  pointer-events: ${(props) => (props.isRoomFull ? 'none' : 'inherit')};
  opacity: ${(props) => (props.isRoomFull ? '60%' : 'inherit')};
`;

const HotelName = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #454545;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  .react-icons {
    margin-left: 4px;
  }
`;
