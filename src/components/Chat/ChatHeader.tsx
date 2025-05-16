import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FoodingLogo from "@assets/common/logo.png"; // Fooding 로고 (경로 조정)
 
const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      <LogoAndTitle>
        <FoodingLogoStyled src={FoodingLogo} alt="Fooding Logo" />
        <TitleText>Fooding’s Pick!</TitleText>
      </LogoAndTitle>
  
    </HeaderContainer>
  );
};

export default ChatHeader;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background-color: #fffbea;
  color: #222;
  font-weight: bold;
  font-size: 16px;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: red;
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FoodingLogoStyled = styled.img`
  width: 40px;
  height: 40px;
`;

const TitleText = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #353432;
`;











/*import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FoodingLogo from "@assets/common/logo.png"; // Fooding 로고 (경로 조정)
 
const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      <LogoAndTitle>
        <FoodingLogoStyled src={FoodingLogo} alt="Fooding Logo" />
        <TitleText>Fooding’s Pick!</TitleText>
      </LogoAndTitle>
      <SubTitleText>Fooding이 식단을 추천해드립니다</SubTitleText>
    </HeaderContainer>
  );
};

export default ChatHeader;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #ffeb3b; //노란 계열 배경 (직접 색상 사용)
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FoodingLogoStyled = styled.img`
  width: 40px;
  height: 40px;
`;

const TitleText = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #353432;
`;

const SubTitleText = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #353432;
`;*/




/* import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FoodingLogo from "@assets/common/logo.png";
import FoodingCharacter from "@assets/chat/fooding-character.svg";

const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      <LogoAndCharacter>
        <Logo src={FoodingLogo} alt="Fooding Logo" />
        <Character src={FoodingCharacter} alt="Fooding Character" />
      </LogoAndCharacter>
      <TextContainer>
        <TitleText>Fooding’s Pick!</TitleText>
        <SubTitleText>Fooding이 식단을 추천해드립니다</SubTitleText>
      </TextContainer>
    </HeaderContainer>
  );
};

export default ChatHeader;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: var(--yellow);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const LogoAndCharacter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Character = styled.img`
  width: 40px;
  height: 40px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const TitleText = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #353432;
`;

const SubTitleText = styled.p`
  font-size: 14px;
  margin: 0;
  color: #353432;
`;








/* import styled from "styled-components";
import back from "@assets/common/back.svg";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <BackButton src={back} onClick={() => navigate(-1)} />
    </Div>
  );
};

export default ChatHeader;

const Div = styled.div`
  max-width: 481px;
  width: 100%;
  background: var(--yellow);

  box-sizing: border-box;
  padding: 12px 20px;
  position: fixed;
  top: 0;
`;

const BackButton = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`; */ 
