import useHotels from '../../../hooks/api/useHotel';
import HotelWrapper from './HotelWrapper';
import styled from 'styled-components';

export default function Hotels() {
  const { hotels } = useHotels();

  return (
    <Wrapper>
      {hotels
        ? hotels.map((hotel) => (
          <HotelWrapper key={hotel.id} id={hotel.id} img={hotel.image} title={hotel.name}></HotelWrapper>
        ))
        : ''}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
