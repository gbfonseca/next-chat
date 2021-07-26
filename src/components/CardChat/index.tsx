import { MaskGroup } from '../../assets/images';
import * as S from './styles';
import Image from 'next/image';
interface CardChatProps {
  chat: {
    name: string;
    createdAt: string;
    message: string;
  };
}

function CardChat({ chat }: CardChatProps) {
  return (
    <S.Container>
      <S.UserInfo>
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
      </S.UserInfo>
      <S.Message>{chat.message}</S.Message>
    </S.Container>
  );
}

export default CardChat;
