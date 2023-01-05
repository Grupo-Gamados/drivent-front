import useTicket from '../hooks/api/useTicket';
import useToken from '../hooks/useToken';
import api from './api';

export async function postTicketPaid(ticketId, cardData, token) {
  const { ticket } = useTicket();
  const body = { ticketId, cardData };
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateTicketToPaid(token) {
  const response = await api.put('/payments', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export default function useTicketPaid() {
  const token = useToken();

  const {
    data: ticketData,
    act: getTicket,
  } = (() => useTicket.getTicket(token));
};
