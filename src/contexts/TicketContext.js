import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketTypeSelected, setTicketTypeSelected] = useState('');
  const [includesHotel, setIncludesHotel] = useState('');
  return (
    <TicketContext.Provider value={{ ticketTypeSelected, setTicketTypeSelected, includesHotel, setIncludesHotel }}>
      {children}
    </TicketContext.Provider>
  );
}
