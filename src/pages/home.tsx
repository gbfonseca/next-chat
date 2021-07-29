import { GetServerSideProps } from 'next';

import Homepage from '../containers/Homepage';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Home() {
  return <Homepage />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
