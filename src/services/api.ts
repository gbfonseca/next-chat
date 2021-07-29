import Axios from 'axios';

const api = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://next-chat-api.herokuapp.com',
});

export default api;
