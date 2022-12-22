import { useContext, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../contexts/HotelContext';

export default function HotelWrapper({ img, title }) {
  const [isSelected, setIsSelected] = useState(false);
  const { hotelSelected, setHotelSelected } = useContext(HotelContext);

  function selectHotel(hotelName) {
    if (hotelName !== hotelSelected) {
      setIsSelected(true);
      setHotelSelected(hotelName);
    } else {
      setIsSelected(!isSelected);
      setHotelSelected('');
    }
  }

  return (
    <>
      <Wrapper onClick={() => selectHotel(title)} isSelected={isSelected} hotelSelected={hotelSelected} title={title}>
        <img src={img} alt="Hotel Title"></img>
        <h1>{title}</h1>
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
`;
