import { useState } from 'react';
import { createContext } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelSelected, setHotelSelected] = useState('');

  return (
    <HotelContext.Provider
      value={{
        hotelSelected,
        setHotelSelected,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
