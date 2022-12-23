import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketTypeSelected, setTicketTypeSelected] = useState('');
  const [includesHotel, setIncludesHotel] = useState('');
  const [ticketReserved, setTicketReserved] = useState({});
  return (
    <TicketContext.Provider
      value={{
        ticketTypeSelected,
        setTicketTypeSelected,
        includesHotel,
        setIncludesHotel,
        ticketReserved,
        setTicketReserved,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
