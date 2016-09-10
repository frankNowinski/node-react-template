import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const CREATE_USER = 'CREATE_USER';

export function createUser(user) {
  const request = axios.post(`${API_URL}/users`, user);

  return {
    type: CREATE_USER,
    payload: request
  }
}
