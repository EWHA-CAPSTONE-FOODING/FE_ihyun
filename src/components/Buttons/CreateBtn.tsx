import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {isOpen && (
        <ButtonWrapper>
          <ActionButton onClick={() => navigate("/create/self")}>직접 등록</ActionButton>
          <ActionButton onClick={() => navigate("/create/ocr")}>텍스트 인식 등록</ActionButton>
          <ActionButton onClick={() => navigate("/create/object-detection")}>사물 인식 등록</ActionButton>
        </ButtonWrapper>
      )}
      <MainButton onClick={() => setIsOpen(!isOpen)}>식재료 등록하기</MainButton>
    </Wrapper>
  );
};

export default CreateBtn;

/* ================== 스타일 ================== */

const Wrapper = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: fadeIn 0.3s ease-in-out;
  margin-bottom: 10px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ActionButton = styled.button`
  width: 200px;
  height: 50px;
  background: #ff914d;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff7a30;
  }
`;

const MainButton = styled.button`
  width: 200px;
  height: 50px;
  background: #ff914d;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
  transition: background 0.3s;

  &:hover {
    background: #ff7a30;
  }
`;


/* import styled from "styled-components";
import plus from "@assets/main/plus.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isOpen && (
        <ButtonWrapper>
          <ActionButton onClick={() => navigate("/create/self")}>직접 등록</ActionButton>
          <ActionButton onClick={() => navigate("/create/ocr")}>텍스트 인식 등록</ActionButton>
          <ActionButton onClick={() => navigate("/create/object-detection")}>사물 인식 등록</ActionButton>
        </ButtonWrapper>
      )}

      <FloatingButton onClick={() => setIsOpen(!isOpen)}>
        <img src={plus} alt="plus icon" />
      </FloatingButton>
    </Wrapper>
  );
};

export default CreateBtn;



const Wrapper = styled.div`
  position: absolute;
  bottom: 70px;          
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;         
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px; 
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ActionButton = styled.button`
  width: 200px;
  height: 50px;
  background: #ff914d;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff7a30;
  }
`;


const FloatingButton = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background: #f9f9f9;
  }
`;
*/









/* import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>텍스트 인식 등록</Title>
      <Card onClick={() => navigate("/create/ocr")}>
        <Plus>+</Plus>
        <span>기록하기</span>
      </Card>

      <Title>사물 인식 등록</Title>
      <Card onClick={() => navigate("/create/object-detection")}>
        <Plus>+</Plus>
        <span>기록하기</span>
      </Card>

      <Title>직접 등록</Title>
      <Card onClick={() => navigate("/create/self")}>
      <Plus>+</Plus>
        <span>기록하기</span>
      </Card>
    </Container>
  );
};

export default CreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size:12px;
  font-weight: bold;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 120px;
  background: #f8e9e4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background 0.3s;

  &:hover {
    background: #f4d8c7;
  }

  span {
    margin-top: 5px;
    font-size: 14px;
    color: #333;
  }
`;

const Plus = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #aaa;
`;

const DirectRegister = styled.button`
  width: 100%;
  max-width: 300px;
  height: 50px;
  background: #ff914d;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  transition: background 0.3s;

  &:hover {
    background: #ff7a30;
  }
`;






/* import styled from "styled-components";

import plus from "@assets/main/plus.png";
import { FontBold } from "@style/font.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <List>
          <FontBold size="12px" onClick={() => navigate("/create/self")}>
            직접 등록
          </FontBold>
          <div className="line" />
          <FontBold size="12px" onClick={() => navigate("/create/ocr")}>
            텍스트 인식 등록
          </FontBold>
          <div className="line" />
          <FontBold
            size="12px"
            onClick={() => navigate("/create/object-detection")}
          >
            사물 인식 등록
          </FontBold>
        </List>
      )}
      <Btn onClick={() => setIsOpen(!isOpen)}>
        <img src={plus} />
      </Btn>
    </>
  );
};

export default CreateBtn;

const Btn = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;

const List = styled.div`
  position: absolute;
  bottom: 70px;
  display: flex;
  width: 135px;
  height: 81px;
  padding: 7px 0px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  color: var(--yellow1);

  .line {
    width: 100%;
    height: 1px;
    background: #d9d9d9;
  }
`;
*/