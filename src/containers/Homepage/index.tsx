import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch, BiChevronDown } from 'react-icons/bi';
import Button from '../../components/Button';
import CardChat from '../../components/CardChat';
import Navbar from '../../components/Navbar';
import { chatData } from '../../utils/chatExample';
import { Container, Content, Header, SearchContainer } from './styles';

function Homepage() {
  return (
    <Container>
      <Navbar />
      <Content>
        <div>
          <Header>
            <div>
              <h1>Chats</h1>
              <h2>
                Chats Recentes
                <BiChevronDown size={24} />
              </h2>
            </div>
            <Button>
              <AiOutlinePlus size={24} />
              Criar Novo Chat
            </Button>
          </Header>
          <SearchContainer>
            <div>
              <BiSearch color="#707C97" size={24} />
              <input type="text" placeholder="Pesquisar" />
            </div>
            <div>
              <select name="messages" id="messages" defaultValue={'message'}>
                <option value="message">Mensagens</option>
              </select>
            </div>
          </SearchContainer>
          {chatData.map((chat) => (
            <CardChat key={chat.id} chat={chat} />
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default Homepage;
