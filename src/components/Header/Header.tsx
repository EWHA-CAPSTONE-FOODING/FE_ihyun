import styled from "styled-components";

import textLogo from "@assets/common/textLogo.png";
import back from "@assets/common/back.svg";
import { FontBold } from "@style/font.style";
import { useNavigate } from "react-router-dom";

// 🔧 [1] alignLeft prop 추가
type Props = {
  isBack: boolean;
  title?: string;
  alignLeft?: boolean;
};

const Header = ({ isBack, title, alignLeft = false }: Props) => {
  const navigate = useNavigate();

  return (
    <Wrapper alignLeft={alignLeft}>
      <LeftBox alignLeft={alignLeft}>
        {!isBack ? (
          <Logo src={textLogo} onClick={() => navigate("/main")} />
        ) : (
          <BackButton src={back} onClick={() => navigate(-1)} />
        )}

        {/* 🔧 alignLeft일 경우 title을 로고 옆에 배치 */}
        {alignLeft && title && (
          <FontBold size="12px" className="title">{title}</FontBold>
        )}
      </LeftBox>

      {/* 🔧 alignLeft 아닐 경우 오른쪽 정렬 유지 */}
      {!alignLeft && (
        <FontBold size="12px" className="title">{title}</FontBold>
      )}
    </Wrapper>
  );
};

export default Header;

// 🔧 Header 전체 wrapper
const Wrapper = styled.div<{ alignLeft: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  padding-left: ${({ alignLeft }) => (alignLeft ? "20px" : "20px")}; // 👈 여기에 강제 설정
  display: flex;
  flex-direction: row;
  justify-content: ${({ alignLeft }) => (alignLeft ? "flex-start" : "space-between")};
  align-items: center;
`;


// 🔧 로고 + title 묶은 박스
const LeftBox = styled.div<{ alignLeft: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ alignLeft }) => (alignLeft ? "6px" : "0")};
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  display: block;
`;

const BackButton = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`;







/*
import styled from "styled-components";

import textLogo from "@assets/common/textLogo.png";
import back from "@assets/common/back.svg";
import { FontBold } from "@style/font.style";
import { useNavigate } from "react-router-dom";

type Props = {
  isBack: boolean;
  title?: string;
};

const Header = ({ isBack, title }: Props) => {
  const navigate = useNavigate();

  return (
    <Div>
      {!isBack ? (
        <Logo src={textLogo} onClick={() => navigate("/main")} />
      ) : (
        <BackButton src={back} onClick={() => navigate(-1)} />
      )}

      <div className="title">
        <FontBold size="12px">{title}</FontBold>
      </div>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: var(--grey2);
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  display: block;
`;


const BackButton = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`;
*/
