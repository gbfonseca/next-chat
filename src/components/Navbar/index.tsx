import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import {
  BsFillChatDotsFill,
  BsGrid,
  BsPerson,
  BsBell,
  BsPower,
} from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import { Container, Menu, User, Item } from './styles';

import { MaskGroup } from '../../assets/images';
import { useAuth } from '../../hooks/auth';

function Navbar() {
  const router = useRouter();
  const route = router.route;
  const { user } = useAuth();

  return (
    <Container>
      <User>
        <Image
          src={MaskGroup}
          alt="User"
          width={86}
          height={86}
          layout="intrinsic"
        />
        <h2>
          {user.name} <BiChevronDown size={24} />
        </h2>
      </User>
      <Menu>
        <Link href="/home">
          <a>
            <Item>
              <BsGrid color={route === '/home' ? '#2A8BF2' : '#707C97'} />
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
