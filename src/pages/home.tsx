import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

import Homepage from '../containers/Homepage';
import { AuthService } from '../services/auth';
import { getAPIClient } from '../services/axios';

export default function Home() {
  return <Homepage />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { 'nextchat.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  await AuthService.getLoggedUser(apiClient);

  return {
    props: {},
  };
};
