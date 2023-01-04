import api from './api';

export async function signInUsingGitHub(code) {
  const { data } = await api.post('/oauth/github/login', { code });
  return data;
}
