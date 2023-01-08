import { useContext } from 'react';
import styled from 'styled-components';
import BookingContext from '../../../contexts/BookingContext';
import useToken from '../../../hooks/useToken';
import { postBooking } from '../../../services/bookingApi';

export default function BookingButton() {
  const { bookingSelectedId } = useContext(BookingContext);

  const token = useToken();
  async function createBooking() {
    await postBooking(token, bookingSelectedId);
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
  border: none;
  outline: none;
  :hover {
    background-color: #ffeed2;
    box-shadow: 0px 15px 20px lightgray;
    color: #000;
    transform: translateY(-7px);
  }
`;
