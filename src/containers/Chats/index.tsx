import { useState } from 'react';
import {
  AiOutlineFile,
  AiOutlinePaperClip,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { BiImage, BiMovie } from 'react-icons/bi';
import { MaskGroup } from '../../assets/images';
import Navbar from '../../components/Navbar';

import {
  Container,
  Chat,
  HeaderChat,
  Content,
  MessageBox,
  IconView,
  Input,
  HeaderIconView,
  Message,
  IconGroup,
} from './styles';

function Chats() {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <Container>
      <Navbar />
      <Chat>
        <HeaderChat>
          <div>
            <img src={MaskGroup} alt="Profile Image" />
            <div>
              <h1>Nika Jerrado</h1>
              <h6>Last online 5 hours ago</h6>
            </div>
          </div>
          <div>
            <HeaderIconView>
              <AiOutlinePaperClip color="#707C97" />
            </HeaderIconView>
            <HeaderIconView>
              <BsThreeDotsVertical color="#707C97" />
            </HeaderIconView>
          </div>
        </HeaderChat>
        <Content>
          <Message side="left">
            Hello! Finally found the time to write to you :) I need your help in
            creating interactive animations for my mobile application.
          </Message>
          <Message side="left">Can i send you files?</Message>
          <Message side="right">Hey! Okay, send out.</Message>
          <Message side="right">Waiting for files...</Message>
        </Content>
        <MessageBox>
          <IconView onClick={() => setShowIcons((prevState) => !prevState)}>
            <AiOutlinePlus color="#FFF" />
          </IconView>
          {showIcons && (
            <IconGroup>
              <IconView>
                <BiMovie color="#FFF" />
              </IconView>
              <IconView>
                <BiImage color="#FFF" />
              </IconView>
              <IconView>
                <AiOutlineFile color="#FFF" />
              </IconView>
            </IconGroup>
          )}
          <Input type="text" placeholder="Insira sua mensagem aqui" />
          <IconView>
            <IoIosSend color="#FFF" />
          </IconView>
        </MessageBox>
      </Chat>
    </Container>
  );
}

export default Chats;
