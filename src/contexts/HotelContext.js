import { useState } from 'react';
import { createContext } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelSelected, setHotelSelected] = useState('');
  const [hotelSelectedId, setHotelSelectedId] = useState(0);

  return (
    <HotelContext.Provider
      value={{
        hotelSelected,
        setHotelSelected,
        hotelSelectedId,
        setHotelSelectedId,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
