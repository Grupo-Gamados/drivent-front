import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketTypeSelected, setTicketTypeSelected] = useState('');
  return (
    <TicketContext.Provider value={{ ticketTypeSelected, setTicketTypeSelected }}>{children}</TicketContext.Provider>
  );
}
