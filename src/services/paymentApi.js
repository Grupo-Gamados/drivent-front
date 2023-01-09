import api from './api';

export async function postTicketPaid(token, body) {
  console.log(body);
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
