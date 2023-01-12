import { useState } from 'react';
import { createContext } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelSelected, setHotelSelected] = useState('');
  const [hotelSelectedId, setHotelSelectedId] = useState(0);
  const [ reloadHotels, setReloadHotels ] = useState(false);
  const [ isHotelBooked, setIsHotelBooked ] = useState(false);

  return (
    <HotelContext.Provider
      value={{
        hotelSelected,
        setHotelSelected,
        hotelSelectedId,
        setHotelSelectedId,
        reloadHotels,
        setReloadHotels,
        isHotelBooked,
        setIsHotelBooked
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}
