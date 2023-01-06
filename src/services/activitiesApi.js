import api from './api';

export async function getActivities(token, dayIdNum) {
  const response = await api.get(`/activities/${dayIdNum}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function postRegister(token, activityId) {
  const body = { activityId };
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
