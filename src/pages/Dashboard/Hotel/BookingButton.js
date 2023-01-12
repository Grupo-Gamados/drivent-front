import { useContext } from 'react';
import styled from 'styled-components';
import BookingContext from '../../../contexts/BookingContext';
import HotelContext from '../../../contexts/HotelContext';
import useToken from '../../../hooks/useToken';
import { postBooking } from '../../../services/bookingApi';
import { toast } from 'react-toastify';

export default function BookingButton() {
  const { bookingSelectedId } = useContext(BookingContext);
  const { reloadHotels, setReloadHotels, setIsHotelBooked } = useContext(HotelContext);

  const token = useToken();
  async function createBooking() {
    try {
      await postBooking(token, bookingSelectedId);
      setIsHotelBooked(true);
      setReloadHotels(!reloadHotels);
      toast('Quarto reservado com sucesso!');
    } catch (error) {
      toast('Houve um erro ao tentar realizar a reserva. Por favor, tente novamente.');
    }
  }

  return <Button onClick={createBooking}>RESERVAR QUARTO</Button>;
}

const Button = styled.div`
  height: 37px;
  width: 200px;
  border-radius: 4px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  background-color: lightgray;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  outline: none;
  :hover {
    background-color: #ffeed2;
    box-shadow: 0px 15px 20px lightgray;
    color: #000;
    transform: translateY(-7px);
  }
`;
