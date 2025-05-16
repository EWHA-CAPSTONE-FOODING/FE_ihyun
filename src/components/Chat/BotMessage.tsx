import React from "react";
import styled from "styled-components";
import chatbot from "@assets/chat/fooding-character.svg";
import loading from "@assets/chat/loading.gif";

type Props = {
  content?: string;
  isLoading: boolean;
};

const BotMessage = ({ content, isLoading }: Props) => {
  return (
    <Container>
      <Profile>
        <img src={chatbot} alt="chatbot" />
      </Profile>
      <Content>
        <SenderName>Fooding</SenderName>
        <Bubble>
          {isLoading ? (
            <img src={loading} alt="loading" className="loading" />
          ) : (
            content
          )}
        </Bubble>
      </Content>
    </Container>
  );
};

export default BotMessage;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SenderName = styled.div`
  font-size: 14px;
  color: #353432;
`;

const Bubble = styled.div`
  max-width: 70%;
  border-radius: 12px;
  background: #fff9c4; /* Fooding 테마에 맞는 노란색 배경 */
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;

  .loading {
    height: 40px;
    padding: 0 20px;
  }
`;





/* import React from "react";
import styled from "styled-components";
import chatbot from "@assets/chat/fooding-character.svg";
import { FontMedium } from "@style/font.style";
import loading from "@assets/chat/loading.gif";

type Props = {
  content?: string;
  isLoading: boolean;
};

const BotMessage = ({ content, isLoading }: Props) => {
  return (
    <Div>
      <div className="profile">
        <img src={chatbot} alt="chatbot" />
      </div>

      <div className="container">
        <div className="name">
          <FontMedium size="14px"> Fooding</FontMedium>
        </div>
        <div className="text">
          {isLoading ? (
            <img src={loading} alt="loading" className="loading" />
          ) : (
            content
          )}
        </div>
      </div>
    </Div>
  );
};

export default BotMessage;

const Div = styled.div`
  display: flex;
  gap: 10px;

  .profile {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .name {
    display: flex;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--yellow-light);
    padding: 10px;

    .loading {
      height: 40px;
      padding: 0px 20px;
    }
  }
`; */
