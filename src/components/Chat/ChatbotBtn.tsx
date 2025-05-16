import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import chatbot from "@assets/chat/fooding-character.svg";

const ChatbotBtn = () => {
  const navigate = useNavigate();
  return (
    <BtnContainer>
      <Btn onClick={() => navigate("/chat")}>
        <img src={chatbot} alt="chatbot" />
        <span>챗봇 시작</span>
      </Btn>
    </BtnContainer>
  );
};

export default ChatbotBtn;

const BtnContainer = styled.div`
  width: 100%;
  max-width: 481px;
  position: fixed;
  bottom: 80px;
  height: 65px;
  padding: 0 10px 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    bottom: 60px;
    padding: 0 5px 0 0;
  }
`;

const floatAnimation = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 6px;
  }
`;

const Btn = styled.div`
  animation: ${floatAnimation} 0.5s ease-in-out infinite alternate;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 45px;
    flex-shrink: 0;
  }

  span {
    font-size: 10px;
    color: #000;
    margin-top: 1px;
  }

  &:hover {
    background: #fff9c4;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;

    img {
      width: 40px;
    }
  }
`;




/*
import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import chatbot from "@assets/chat/fooding-character.svg";

const ChatbotBtn = () => {
  const navigate = useNavigate();
  return (
    <BtnContainer>
      <Btn onClick={() => navigate("/chat")}>
        <img src={chatbot} alt="chatbot" />
        <span>챗봇 시작</span>
      </Btn>
    </BtnContainer>
  );
};

export default ChatbotBtn;

const BtnContainer = styled.div`
  width: 100%;
  max-width: 481px;
  position: fixed;
  bottom: 80px;
  height: 65px;
  padding: 0 10px 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    bottom: 60px;
    padding: 0 5px 0 0;
  }
`;

const floatAnimation = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 6px;
  }
`;

const Btn = styled.div`
  animation: ${floatAnimation} 0.5s ease-in-out infinite alternate;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 45px;
    flex-shrink: 0;
  }

  span {
    font-size: 10px;
    color: #000;
    margin-top: 1px;
  }

  &:hover {
    background: #fff9c4; // 직접 지정한 노란색 계열
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;

    img {
      width: 40px;
    }
  }
`; */



/*import React from "react";
import styled from "styled-components";
import chatbot from "@assets/chat/fooding-character.svg";
import { useNavigate } from "react-router-dom";

const ChatbotBtn = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Btn onClick={() => navigate("/chat")}>
        <img src={chatbot} alt="chatbot" />
        <span>챗봇 시작</span> 
      </Btn>
    </Div>
  );
};

export default ChatbotBtn;

const Div = styled.div`
  width: 100%;
  max-width: 481px;
  position: fixed;
  bottom: 80px;
  height: 65px;
  padding: 0 10px 0 0;
  box-sizing: border-box;

  display: flex;
  justify-content: end;

  @media (max-width: 480px) {
    bottom: 60px;
    padding: 0 5px 0 0;
  }
`;

const Btn = styled.div`
  animation: motion 0.5s ease-in-out infinite alternate; //애니메이션 효과
  
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 6px;
    }
  }

  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff; // 버튼 배경색 
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // 이미지와 텍스트 수직 정렬

  img {
    width: 45px;
    flex-shrink: 0;
  }

  span {
    font-size: 10px;
    color: #000;
    margin-top: 1px; // 이미지와 텍스트 간 간격
  }

  &:hover {
    background: var(--yellow-light); // 마우스 오버 시 배경색 변화
  }

  &:active {
    transform: scale(0.95); // 클릭 시 눌리는 효과 
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18); // 눌림 효과
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    img {
      width: 40px;
    }
  }
`;*/