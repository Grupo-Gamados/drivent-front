import api from './api';

export async function getEventDays(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
