import styled from 'styled-components';
import useBooking from '../../../hooks/api/useBooking';
import useHotels from '../../../hooks/api/useHotel';

export default function BookedHotel() {
  const { booking } = useBooking();
  const { hotels } = useHotels();
  const bookedHotel = hotels && booking ? hotels.filter((hotel) => hotel.id === booking.Room.hotelId) : '';

  function analizeRoomCompany() {
    let extraPeople = 0;
    if (booking.bookingList) {
      booking.bookingList.forEach((element) => {
        if (element.roomId === booking.Room.id) {
          extraPeople++;
        }
      });
    }
    if (extraPeople === 1) {
      return 'Somente você';
    }
    return `Você e mais ${extraPeople - 1} pessoas`;
  }

  function analizeRoomCapacity() {
    if (booking.Room.capacity === 1) return 'Single';
    else if (booking.Room.capacity === 2) return 'Double';
    else return 'Triple';
  }

  return booking && hotels ? (
    <Wrapper>
      <img src={bookedHotel[0].image} alt="Booked Hotel Title"></img>
      <h1>{bookedHotel[0].name}</h1>
      <h2>Quarto reservado</h2>
      <h3>
        {booking.Room.name} ({analizeRoomCapacity()})
      </h3>
      <h2>Pessoas no quarto</h2>
      <h3>{analizeRoomCompany()}</h3>
    </Wrapper>
  ) : (
    ''
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
  background-color: #ffeed2;
  border-radius: 10px;
  margin-top: 22px;

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
