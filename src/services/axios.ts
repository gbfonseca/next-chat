import Axios from 'axios';
import * as next from 'next';
import { parseCookies } from 'nookies';
export function getAPIClient(
  ctx?:
    | Pick<next.NextPageContext, 'req'>
    | {
        req: next.NextApiRequest;
      }
    | null
    | undefined,
) {
  const { 'nextchat.token': token } = parseCookies(ctx);
  const api = Axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://next-chat-api.herokuapp.com',
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return api;
}
