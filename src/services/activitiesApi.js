import api from './api';

export async function getActivities(token, dayIdNum) {
  const response = await api.get(`/activities/${dayIdNum}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
