import Image from 'next/image'
import { MaskGroup } from '../../assets/images';

import { Container, Menu, User, Item } from './styles';

import { BsFillChatDotsFill, BsGrid, BsPerson, BsBell, BsPower } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

function Navbar() {
  return (
    <Container>
      <User>
        <Image src={MaskGroup} alt="User" width={86} height={86} />
        <h2>Neymar Júnior</h2>
      </User>
      <Menu>
        <Item>
          <BsGrid />
          Home
        </Item>
        <Item>
          <BsFillChatDotsFill />
          Chat
        </Item>
        <Item>
          <BsPerson />
          Contatos
        </Item>
        <Item>
          <BsBell />
          Notificações
        </Item>
        <Item>
          <AiOutlineCalendar />
          Calendário
        </Item>
        <Item>
          <FiSettings />
          Configurações
        </Item>
      </Menu>
      <Item>
        <BsPower />
        Sair
      </Item>
    </Container>
  );
};

export default Navbar;
