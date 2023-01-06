import useTicket from '../hooks/api/useTicket';
import useToken from '../hooks/useToken';
import api from './api';

export async function postTicketPaid({ token, body }) {
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateTicketToPaid({ token, body }) {
  const response = await api.put('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

