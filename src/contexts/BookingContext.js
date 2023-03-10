import { useState } from 'react';
import { createContext } from 'react';

const BookingContext = createContext();
export default BookingContext;

export function BookingProvider({ children }) {
  const [bookingSelected, setBookingSelected] = useState('');
  const [bookingSelectedId, setBookingSelectedId] = useState(0);
  const [isChangingBooking, setIsChangingBooking] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        bookingSelected,
        setBookingSelected,
        bookingSelectedId,
        setBookingSelectedId,
        isChangingBooking,
        setIsChangingBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
