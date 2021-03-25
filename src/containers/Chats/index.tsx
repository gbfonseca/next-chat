import { ReactNode } from 'react';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

interface ChatsProps {
  children: ReactNode;
}

function Chats() {
  return (
    <Container>
      <Navbar></Navbar>
    </Container>
  );
};

export default Chats;
