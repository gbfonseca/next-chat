import { GetServerSideProps } from 'next';

import Chats from '../containers/Chats';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Chat() {
  return <Chats />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
