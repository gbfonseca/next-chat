import Image from 'next/image';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { MaskGroup } from '../../assets/images';

import {
  BsFillChatDotsFill,
  BsGrid,
  BsPerson,
  BsBell,
  BsPower,
} from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { Container, Menu, User, Item } from './styles';
import { BiChevronDown } from 'react-icons/bi';

function Navbar() {
  const router = useRouter();
  const route = router.route;

  return (
    <Container>
      <User>
        <Image src={MaskGroup} alt="User" width={86} height={86} />
        <h2>
          Neymar Júnior <BiChevronDown size={24} />
        </h2>
      </User>
      <Menu>
        <Link href="/">
          <a>
            <Item>
              <BsGrid color={route === '/' ? '#2A8BF2' : '#707C97'} />
              Home
            </Item>
          </a>
        </Link>
        <Link href="/chat">
          <a>
            <Item>
              <BsFillChatDotsFill
                color={route === '/[chat]' ? '#2A8BF2' : '#707C97'}
              />
              Chat
            </Item>
          </a>
        </Link>

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
}

export default Navbar;
