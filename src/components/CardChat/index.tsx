import { MaskGroup } from '../../assets/images';
import { Container, Message, UserInfo } from './styles';

interface CardChatProps {
  chat: any;
}

function CardChat({ chat }: CardChatProps) {
  return (
    <Container>
      <UserInfo>
        <img src={MaskGroup} alt={chat.name} />
        <div>
          <div>
            <h1>{chat.name}</h1>
            <h2>{chat.name}</h2>
          </div>
        </div>
        <h3>{chat.createdAt}</h3>
      </UserInfo>
      <Message>{chat.message}</Message>
    </Container>
  );
}

export default CardChat;
