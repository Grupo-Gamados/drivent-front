import { useContext, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../contexts/HotelContext';
import useRooms from '../../../hooks/api/useRooms';

export default function HotelWrapper({ img, title, id }) {
  const [isSelected, setIsSelected] = useState(false);
  const { hotelSelected, setHotelSelected, setHotelSelectedId } = useContext(HotelContext);
  const { roomsByHotel } = useRooms(id);
  let hotelDescription = 'Single';
  let vacancies = 0;
  function getRoomDescription() {
    if (roomsByHotel) {
      roomsByHotel.Rooms.forEach((room) => {
        vacancies += Number(room.capacity);
        if (hotelDescription !== 'Single, Double e Triple' && Number(room.capacity) >= 3) {
          hotelDescription = 'Single, Double e Triple';
        } else if (hotelDescription !== 'Single e Double' && Number(room.capacity) === 2) {
          hotelDescription = 'Single e Double';
        }
      });
    }
  }

  getRoomDescription();

  function selectHotel(hotelName) {
    if (hotelName !== hotelSelected) {
      setIsSelected(true);
      setHotelSelected(hotelName);
      setHotelSelectedId(id);
    } else {
      setIsSelected(!isSelected);
      setHotelSelected('');
      setHotelSelectedId(0);
    }
  }

  return (
    <>
      <Wrapper onClick={() => selectHotel(title)} isSelected={isSelected} hotelSelected={hotelSelected} title={title}>
        <img src={img} alt="Hotel Title"></img>
        <h1>{title}</h1>
        <h2>Tipos de acomodação:</h2>
        <h3>{hotelDescription}</h3>
        <h2>Vagas disponíveis:</h2>
        <h3>{vacancies}</h3>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  align-items: flex-start;
  justify-content: start;
  width: 196px;
  height: 264px;
  background-color: ${(props) => (props.isSelected && props.hotelSelected === props.title ? '#FFEED2' : '#ebebeb')};
  border-radius: 10px;
  margin-right: 22px;
  cursor: pointer;

  img {
    width: 170px;
    height: 108px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  h1 {
    color: #343434;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
  }

  h2 {
    color: #3c3c3c;
    font-weight: 700;
    font-size: 13px;
    margin-top: 14px;
  }

  h3 {
    color: #3c3c3c;
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
  }
`;
