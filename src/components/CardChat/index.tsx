import Image from 'next/image';
import { MaskGroup } from '../../assets/images';
import { Container, Message, UserInfo } from './styles';

interface CardChatProps {
  chat: any;
}

function CardChat({ chat }: CardChatProps) {
  return (
    <Container>
      <UserInfo>
        <Image src={MaskGroup} alt="profile" width={54} height={54} />
        <div>
          <div>
            <h1>{chat.name}</h1>
            <h2>{chat.name}</h2>
          </div>
          <h3>{chat.createdAt}</h3>
        </div>
      </UserInfo>
      <Message>{chat.message}</Message>
    </Container>
  );
}

export default CardChat;
