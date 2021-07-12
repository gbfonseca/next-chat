import { MaskGroup } from '../../assets/images';
import { Container, Message, UserInfo } from './styles';
import Image from 'next/image';
interface CardChatProps {
  chat: any;
}

function CardChat({ chat }: CardChatProps) {
  return (
    <Container>
      <UserInfo>
        <Image
          src={MaskGroup}
          width={54}
          height={54}
          layout="fixed"
          alt={chat.name}
        />
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
